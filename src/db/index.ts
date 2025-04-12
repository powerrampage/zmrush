// import mysql from "serverless-mysql";
import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.MYSQL_DB_HOST,
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB_USER,
  port: Number(process.env.MYSQL_DB_PORT),
});

console.log("env", process.env);
