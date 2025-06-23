const db = require("../../database/db");
const logger = require("../../helper/writeLog");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const table = "employees";

const login = async (req, res) => {
  try {
    const checkTelSql = `select * from employees where tel = :tel`;
    const [resultCheckTel] = await db.query(checkTelSql, { ...req.body });
    if (resultCheckTel?.[0]?.length === 0) {
      return {
        result: false,
        errors: {
          message: "User or password not correct",
        },
      };
    }
    // 12345
    const isCorrectPassword = await bcrypt.compare(
      req.body.password,
      resultCheckTel[0].password
    );
    if (isCorrectPassword) {
      const payload = {
        user: resultCheckTel[0].tel,
        id: resultCheckTel[0].id,
      };
      const accessToken = jwt.sign(
        payload,
        "laskdjfklajsd@129394ufijklsdjafijeklajsdf",
        { expiresIn: "10m" }
      );
      return {
        result: true,
        accessToken,
      };
    } else {
      return {
        result: false,
        errors: {
          message: "User or password not correct",
          field: "password",
        },
      };
    }

    const sql = `select * from users where tel = :tel and password = :password`;
    const [data] = await db.query(sql, { ...req.body });
    return data;
  } catch (err) {
    logger.logError({ name: `${table}.login`, message: err });
    return err;
  }
};

module.exports = {
  login,
};
