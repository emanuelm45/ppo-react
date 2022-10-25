import express from 'express'
import pool from '../helpers/database'
import { TokenBase, TokenGenerator } from 'ts-token-generator'

const router = express.Router()
const session: any = {}

router.get('/:id', async (req, res) => {
  try {
    if (req.params.id === '*') {
      const query = 'SELECT * FROM user'
      const rows = await pool.query(query)

      res.status(200).json(rows)
    } else {
      const query = `SELECT * FROM user WHERE id=?`
      const rows = await pool.query(query, [req.params.id])
      res.status(200).json(rows)
    }
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, class_id } = req.body

    const getExistingUser = `SELECT * FROM user WHERE email=?`
    const row = await pool.query(getExistingUser, [email])

    if (row[0]?.email) {
      res.status(400).json({ message: 'User already exists' })
      return
    }

    const query = `INSERT INTO user (name, email, password, class_id) VALUES (?, ?, ?, ?)`
    const rows = await pool.query(query, [name, email, password, class_id])
    res.status(200).json({
      message: 'User created succesfully',
      id: rows.insertId.toString()
    })
  } catch (error: any) {
    res.status(400).json(error.message)
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const query = `SELECT * FROM user WHERE email=? AND password=? LIMIT 1`
    const rows = await pool.query(query, [email, password])

    if (!rows[0]?.id) {
      return res.status(404).json({ message: 'User not found' })
    }

    const token = new TokenGenerator({
      bitSize: 512,
      baseEncoding: TokenBase.BASE16
    }).generate()

    session[token] = rows[0]

    res.status(200).json({ message: 'User logged in', token })
  } catch (error: any) {
    res.status(400).json({ message: "Can't login" })
  }
})

router.get('/login/:token', async (req, res) => {
  try {
    const { token } = req.params
    const user = session[token]

    if (!user) {
      res.status(404).json({ message: 'User not found' })
      return
    }

    res.status(200).json(user)
  } catch (error: any) {
    res.status(400).json(error.message)
  }
})

router.patch('/update', async (req, res) => {
  try {
    const { name, email, id } = req.body

    const query = `UPDATE user SET name=?, email=? WHERE id=?`

    const rows = await pool.query(query, [name, email, id])

    res.status(200).json({ message: 'User updated succesfully' })
  } catch (error: any) {
    res.status(400).json(error.message)
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    if (req.params.id === '*') {
      const query = 'DELETE FROM user'
      const rows = await pool.query(query)
      res.status(200).json({ message: 'All users deleted' })
      return
    }

    const query = `DELETE FROM user WHERE id=?`
    const rows = await pool.query(query, [req.params.id])
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error: any) {
    res.status(400).json(error.message)
  }
})

export default router
