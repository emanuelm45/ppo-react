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
const router = express_1.default.Router();
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (id === '*') {
            const query = 'SELECT * FROM class';
            const rows = yield database_1.default.query(query);
            res.status(200).json(rows);
        }
        else {
            const query = `SELECT * FROM class WHERE id=?`;
            const rows = yield database_1.default.query(query, [id]);
            res.status(200).json(rows);
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
router.get('/:id/students', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (id === '*') {
            const query = `
      SELECT c.id AS id, c.name AS class,
      GROUP_CONCAT(u.name ORDER BY u.name SEPARATOR ', ') AS students
      FROM class c
      JOIN user u 
      ON (u.class_id = c.id)
      GROUP BY c.name
      ORDER BY c.name, u.name
      `;
            const rows = yield database_1.default.query(query);
            return res.status(200).json(rows);
        }
        const query = `
    SELECT c.id id, c.name class, GROUP_CONCAT(u.name ORDER BY u.name SEPARATOR ', ') students
    FROM class c
    JOIN user u
    ON (u.class_id = c.id)
    WHERE c.id=?
    GROUP BY c.name
    ORDER BY c.name, u.name
    `;
        const rows = yield database_1.default.query(query, [id]);
        return res.status(200).json(rows);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const query = `INSERT INTO class (name) VALUES (?)`;
        const rows = yield database_1.default.query(query, [name]);
        res.status(200).json({
            message: 'Class created succesfully',
            id: rows.insertId.toString()
        });
    }
    catch (error) {
        res.status(400).json(error.message);
    }
}));
exports.default = router;
