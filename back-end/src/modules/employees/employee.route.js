const express = require("express");
const router = express.Router();
const db = require("../../database/db");
const joi = require("joi");
const bcrypt = require("bcrypt");

router.get("/api/employees", async (req, res) => {
  const [data] = await db.query("SELECT * FROM employees");
  res.json({
    message: "Response from 3033 success",
    status: 200,
    data,
  });
});

router.post("/api/employees", async (req, res) => {
  const { first_name, last_name, email, image, gender, dob, password } =
    req.body;
  const schema = joi
    .object({
      tel: joi.string().required(),
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
      `insert into employees (first_name, last_name, email, image, gender, dob, password, tel) values ( ${mysql.escape(
        first_name
      )},
      ${mysql.escape(last_name)},
      ${mysql.escape(email)},
      ${mysql.escape(image)},
      ${mysql.escape(gender)},
      ${mysql.escape(dob)},
      ${mysql.escape(_password)},
      ${mysql.escape(req.body.tel)})`
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

router.put("/api/employees", async (req, res) => {
  const { first_name, last_name, email, image, gender, dob, password, id } =
    req.body;

  const schema = joi
    .object({
      tel: joi.string().required(),
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
    )}, tel = ${mysql.escape(req.body.tel)}   WHERE id = ${mysql.escape(id)}`;

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

router.delete("/api/employees", async (req, res) => {
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

module.exports = router;
