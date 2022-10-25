import express from 'express'
import pool from '../helpers/database'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    if (id === '*') {
      const query = `
      SELECT c.id AS id, c.name AS class,
      GROUP_CONCAT(u.name ORDER BY u.name SEPARATOR ', ') AS students
      FROM class c
      JOIN user u 
      ON (u.class_id = c.id)
      GROUP BY c.name
      ORDER BY c.name, u.name
      `
      const rows = await pool.query(query)

      return res.status(200).json(rows)
    }

    const query = `
    SELECT c.id id, c.name classname, GROUP_CONCAT(u.name ORDER BY u.name SEPARATOR ', ') students
    FROM class c
    JOIN user u
    ON (u.class_id = c.id)
    WHERE c.id=?
    GROUP BY c.name
    ORDER BY c.name, u.name
    `
    const rows = await pool.query(query, [id])
    return res.status(200).json(rows[0])
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

router.post('/register', async (req, res) => {
  try {
    const { name } = req.body

    const query = `INSERT INTO class (name) VALUES (?)`
    const rows = await pool.query(query, [name])

    res.status(200).json({
      message: 'Class created succesfully',
      id: rows.insertId.toString()
    })
  } catch (error: any) {
    res.status(400).json(error.message)
  }
})

export default router
