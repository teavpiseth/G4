const db = require("../../database/db");
const logger = require("../../helper/writeLog");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const table = "employees";
const { getSecretKeyJWT } = require("../../helper/const");

const login = async (req, res) => {
  try {
    const checkTelSql = `select * from employees where tel = :tel`;
    const [resultCheckTel] = await db.query(checkTelSql, { ...req.body });
    if (resultCheckTel?.[0]?.length === 0) {
      return {
        result: false,
        message: "User or password not correct",
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

      const accessToken = jwt.sign(payload, getSecretKeyJWT(), {
        expiresIn: "10m",
      });
      const refreshToken = jwt.sign(payload, getSecretKeyJWT(), {
        expiresIn: "1d",
      });
      return {
        result: true,
        data: { accessToken, refreshToken },
      };
    } else {
      return {
        result: false,
        message: "User or password not correct",
      };
    }
  } catch (err) {
    logger.logError({ name: `${table}.login`, message: err });
    return { result: false, message: "Internal server error" };
  }
};

module.exports = {
  login,
};
