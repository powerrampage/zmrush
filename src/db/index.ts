// import mysql from "serverless-mysql";
import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_USER,
  port: Number(process.env.DB_PORT),
});

console.log("env", process.env);
