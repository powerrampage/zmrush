// import mysql from "serverless-mysql";
import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "db4.myarena.ru", // process.env.MYSQL_DB_HOST,
  user: "u40758_zm_rush_server", // process.env.MYSQL_DB_USER,
  password: "I3m6K6z3D8", // process.env.MYSQL_DB_PASSWORD,
  database: "u40758_zm_rush_server", // process.env.MYSQL_DB_USER,
  port: 3306, // Number(process.env.MYSQL_DB_PORT),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000, // 10 sec
});

console.log("env", process.env);
