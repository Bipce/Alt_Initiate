import mysql from "mysql2"

export const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "5292",
  database: "alt_initiate",
}).promise()

