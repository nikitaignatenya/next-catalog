import mysql, { Pool } from "mysql2/promise";

declare global {
  var pool: Pool | undefined;
}

function createPool(): Pool {
  return mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "next_shop",
    connectionLimit: 1,
  });
}

export function getPool(): Pool {
  if (!global.pool) {
    global.pool = createPool();
  }
  return global.pool;
}
