/* eslint-disable prefer-const */
/* eslint-disable no-var */
// lib/mysql.ts
import mysql from 'mysql2/promise';

let pool: mysql.Pool;

declare global {
  var mysqlPool: mysql.Pool | undefined;
}

if (!global.mysqlPool) {
  global.mysqlPool = mysql.createPool({
    host: "db4.myarena.ru",
    user: "u40758_zm_rush_server",
    password: "1231",
    database: "u40758_zm_rush_server",
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000,
  });
}

pool = global.mysqlPool;

export {
  pool
};
