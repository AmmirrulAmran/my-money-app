import "dotenv/config";
import pg from "pg";
const { Pool } = pg;

// pg returns NUMERIC as string and DATE as a timezone-shifted Date by default
pg.types.setTypeParser(1700, (value) => parseFloat(value));
pg.types.setTypeParser(1082, (value) => value);

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
});

export const query = (text, params) => pool.query(text, params);

export default pool;
