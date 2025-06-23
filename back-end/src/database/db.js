const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "g4",
  connectionLimit: 30,
  namedPlaceholders: true,
});

module.exports = db;
