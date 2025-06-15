/* eslint-disable prefer-const */
/* eslint-disable no-var */
// lib/mysql.ts
import mysql from "mysql2/promise";

let pool: mysql.Pool;

declare global {
  var mysqlPool: mysql.Pool | undefined;
}

if (!global.mysqlPool) {
  global.mysqlPool = mysql.createPool({
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000,
  });
}

pool = global.mysqlPool;

export { pool };
