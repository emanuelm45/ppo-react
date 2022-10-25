import mariadb from 'mariadb'

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 5
})

// Check if the database is connected

async function fetchConn() {
  const conn = await pool.getConnection()
  console.log('Total connections: ', pool.totalConnections())
  console.log('Active connections: ', pool.activeConnections())
  console.log('Idle connections: ', pool.idleConnections())
  return conn
}

export default pool
