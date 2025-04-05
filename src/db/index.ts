import mysql from "serverless-mysql";

export const pool = mysql({
  config: {
    host: process.env.NEXT_DB_HOST,
    user: process.env.NEXT_DB_USER,
    password: process.env.NEXT_DB_PASSWORD,
    database: process.env.NEXT_DB_USER,
    port: Number(process.env.NEXT_DB_PORT),
  },
});
