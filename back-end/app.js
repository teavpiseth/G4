const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const db = require("./database/db");
const mysql = require("mysql2");
const joi = require("joi");
const bcrypt = require("bcrypt");

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
  const schema = joi
    .object({
      first_name: joi.string().required(),
      last_name: joi.string().required(),
      email: joi.string().email().required().messages({
        "string.empty": "Email is required",
        "string.email": "Email must be a valid. Example: 4Bk5o@example.com",
      }),
      image: joi.string().required(),
      gender: joi.string().required(),
      dob: joi.date().required(),
      password: joi.string().required(),
    })
    .unknown();

  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const err = error.details.map((err) => {
      return {
        message: err.message,
        field: err.context.label,
      };
    });
    return res.status(400).json({
      message: err,
    });
  }

  try {
    const _password = bcrypt.hashSync(req.body.password, 10);
    const [rows] = await db.query(
      `insert into employees (first_name, last_name, email, image, gender, dob, password) values ( ${mysql.escape(
        first_name
      )},
    ${mysql.escape(last_name)},
    ${mysql.escape(email)},
    ${mysql.escape(image)},
    ${mysql.escape(gender)},
    ${mysql.escape(dob)},
    ${mysql.escape(_password)})`
    );
    res.json({
      message: "insert success",
      status: 200,
      rows,
    });
  } catch (err) {
    res.status(500).json({
      message: "insert fail",
      rows: [],
    });
  }
});

app.put("/api/employees", async (req, res) => {
  const { first_name, last_name, email, image, gender, dob, password, id } =
    req.body;

  const schema = joi
    .object({
      first_name: joi.string().required(),
      last_name: joi.string().required(),
      email: joi.string().email().required().messages({
        "string.empty": "Email is required",
        "string.email": "Email must be a valid. Example: 4Bk5o@example.com",
      }),
      image: joi.string().required(),
      gender: joi.string().required(),
      dob: joi.date().required(),
      password: joi
        .alternatives()
        .try(joi.string(), joi.number())
        .required()
        .messages({
          "alternatives.types": "Password must be a string or a number",
          "any.required": "Password is required",
        }),
      id: joi.number().required(),
    })
    .unknown();

  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const err = error.details.map((err) => {
      return {
        message: err.message,
        field: err.context.label,
      };
    });
    return res.status(400).json({
      message: err,
    });
  }

  const _password = await bcrypt.hash(String(req.body.password), 10);

  try {
    const sql = `UPDATE employees SET first_name = ${mysql.escape(
      first_name
    )}, last_name = ${mysql.escape(last_name)}, email = ${mysql.escape(
      email
    )}, image = ${mysql.escape(image)}, gender = ${mysql.escape(
      gender
    )}, dob = ${mysql.escape(dob)}, password = ${mysql.escape(
      _password
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
  const schema = joi
    .object({
      id: joi.number().required(),
    })
    .unknown();

  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const err = error.details.map((err) => {
      return {
        message: err.message,
        field: err.context.label,
      };
    });
    return res.status(400).json({
      message: err,
    });
  }
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

app.post("/api/product", async (req, res) => {
  const schema = joi
    .object({
      name: joi.string().required(),
      description: joi.string().required(),
      qty: joi.number().required(),
      price: joi.number().precision(2).required(),
      discount_amount: joi.number().precision(2).required(),
      discount_percent: joi.number().precision(2).required(),
      net_price: joi.number().precision(2).required(),
      status: joi.number().required(),
      category_id: joi.number().required(),
    })
    .unknown();

  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const err = error.details.map((err) => {
      return {
        message: err.message,
        field: err.context.label,
      };
    });
    return res.status(400).json({
      message: err,
    });
  }

  try {
    const [res] = await db.query(
      `insert into products (name, description, qty, price, discount_amount, discount_percent, net_price, status, category_id) values (:name, :description, :qty, :price, :discount_amount, :discount_percent, :net_price, :status, :category_id)`,
      {
        ...req.body,
      }
    );
    if (res.affectedRows == 1) {
      res.json({
        message: "insert success",
        status: 200,
      });
    } else {
      res.json({
        message: "insert fail",
        status: 500,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "insert fail",
      rows: [],
    });
  }
});

app.put("/api/product", async (req, res) => {
  const schema = joi
    .object({
      name: joi.string().required(),
      description: joi.string().required(),
      qty: joi.number().required(),
      price: joi.number().precision(2).required(),
      discount_amount: joi.number().precision(2).required(),
      discount_percent: joi.number().precision(2).required(),
      net_price: joi.number().precision(2).required(),
      status: joi.number().required(),
      category_id: joi.number().required(),
      id: joi.number().required(),
    })
    .unknown();

  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const err = error.details.map((err) => {
      return {
        message: err.message,
        field: err.context.label,
      };
    });
    return res.status(400).json({
      message: err,
    });
  }

  const _password = await bcrypt.hash(String(req.body.password), 10);

  try {
    const sql = `UPDATE products SET name = :name, description = :description, qty = :qty, price = :price, discount_amount = :discount_amount, discount_percent = :discount_percent, net_price = :net_price, status = :status, category_id = :category_id WHERE id = :id`;
    const [data] = await db.query(sql, { ...req.body });
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

app.delete("/api/product", async (req, res) => {
  try {
    const sql = `delete from products where id = :id`;
    const [data] = await db.query(sql, { id: req.body.id });
    res.json({
      message: "delete success",
      status: 200,
      data,
    });
  } catch (err) {
    res.json({
      message: "delete fail",
      status: 500,
      data: [],
    });
  }
});

app.get("/api/product", async (req, res) => {
  try {
    const [data] = await db.query("SELECT * FROM products ORDER BY id DESC");
    res.json({
      message: "success",
      status: 200,
      data,
    });
  } catch (err) {
    res.json({
      message: "Response fail",
      status: 500,
      data: [],
    });
  }
});

app.listen(3033, () => {
  console.log("Server is running on port 3033");
});
