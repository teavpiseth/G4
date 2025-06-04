const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { data } = require("./mock-data/data");
const db = require("./database/db");
const mysql = require("mysql2");

app.use(cors());
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); // for from data

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/send-message", (req, res) => {
  res.sendFile(path.join(__dirname, "public/send", "send-message.html"));
});

app.get("/api/employees", async (req, res) => {
  const [data] = await db.query("SELECT * FROM employees");
  res.json({
    message: "Response from 3033 success",
    status: 200,
    data,
  });
});

app.post("/api/employees", async (req, res) => {
  const { first_name, last_name, email, image, gender, dob, password } =
    req.body;
  try {
    const [rows] = await db.query(
      `insert into employees (first_name, last_name, email, image, gender, dob, password) values ( ${mysql.escape(
        first_name
      )},
    ${mysql.escape(last_name)},
    ${mysql.escape(email)},
    ${mysql.escape(image)},
    ${mysql.escape(gender)},
    ${mysql.escape(dob)},
    ${mysql.escape(password)})`
    );
    res.json({
      message: "insert success",
      status: 200,
      rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "insert fail",
      rows: [],
    });
  }
});

app.put("/api/employees", async (req, res) => {
  const { first_name, last_name, email, image, gender, dob, password, id } =
    req.body;
  try {
    const sql = `UPDATE employees SET first_name = ${mysql.escape(
      first_name
    )}, last_name = ${mysql.escape(last_name)}, email = ${mysql.escape(
      email
    )}, image = ${mysql.escape(image)}, gender = ${mysql.escape(
      gender
    )}, dob = ${mysql.escape(dob)}, password = ${mysql.escape(
      password
    )}   WHERE id = ${mysql.escape(id)}`;
    console.log(sql);
    const [data] = await db.query(sql);
    res.json({
      message: "update success",
      status: 200,
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "update fail",
      data: [],
    });
  }
});

app.delete("/api/employees", async (req, res) => {
  try {
    const [existData] = await db.query(
      `select * from employees where id = ${mysql.escape(req.body.id)}`
    );
    if (existData.length > 0) {
      const [data] = await db.query(
        `delete from employees where id = ${mysql.escape(req.body.id)}`
      );
      res.json({
        message: "delete success",
        status: 200,
        data,
      });
    } else {
      res.json({
        message: "delete fail",
        status: 500,
        data: [],
      });
    }
  } catch (err) {
    res.json({
      message: "delete fail",
      status: 500,
      data: [],
    });
  }
});

app.listen(3033, () => {
  console.log("Server is running on port 3033");
});
