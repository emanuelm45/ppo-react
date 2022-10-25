"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("../helpers/database"));
const ts_token_generator_1 = require("ts-token-generator");
const router = express_1.default.Router();
const session = {};
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.params.id === '*') {
            const query = 'SELECT * FROM user';
            const rows = yield database_1.default.query(query);
            res.status(200).json(rows);
        }
        else {
            const query = `SELECT * FROM user WHERE id=?`;
            const rows = yield database_1.default.query(query, [req.params.id]);
            res.status(200).json(rows);
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { name, email, password, class_id } = req.body;
        const getExistingUser = `SELECT * FROM user WHERE email=?`;
        const row = yield database_1.default.query(getExistingUser, [email]);
        if ((_a = row[0]) === null || _a === void 0 ? void 0 : _a.email) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }
        const query = `INSERT INTO user (name, email, password, class_id) VALUES (?, ?, ?, ?)`;
        const rows = yield database_1.default.query(query, [name, email, password, class_id]);
        res.status(200).json({
            message: 'User created succesfully',
            id: rows.insertId.toString()
        });
    }
    catch (error) {
        res.status(400).json(error.message);
    }
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { email, password } = req.body;
        const query = `SELECT * FROM user WHERE email=? AND password=? LIMIT 1`;
        const rows = yield database_1.default.query(query, [email, password]);
        if (!((_b = rows[0]) === null || _b === void 0 ? void 0 : _b.id)) {
            return res.status(404).json({ message: 'User not found' });
        }
        const token = new ts_token_generator_1.TokenGenerator({
            bitSize: 512,
            baseEncoding: ts_token_generator_1.TokenBase.BASE16
        }).generate();
        session[token] = rows[0];
        res.status(200).json({ message: 'User logged in', token });
    }
    catch (error) {
        res.status(400).json({ message: "Can't login" });
    }
}));
router.get('/login/:token', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.params;
        const user = session[token];
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
}));
router.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.params.id === '*') {
            const query = 'DELETE FROM user';
            const rows = yield database_1.default.query(query);
            res.status(200).json({ message: 'All users deleted' });
            return;
        }
        const query = `DELETE FROM user WHERE id=?`;
        const rows = yield database_1.default.query(query, [req.params.id]);
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(400).json(error.message);
    }
}));
exports.default = router;
