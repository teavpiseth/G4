const joi = require("joi");
const db = require("../../database/db");
const AuthModel = require("./authentication.model");
const productValidate = require("./authentication.validate");

const login = async (req, res) => {
  const validate = await productValidate.login(req, res);

  if (validate.result == false) {
    return res.status(400).json({
      data: validate.errors,
      message: "fail",
    });
  }
  const _result = await AuthModel.login(req, res);
  if (_result.result) {
    res.json({
      message: "Response success",
      status: 200,
      accessToken: _result.accessToken,
    });
  } else {
    res.status(400).json({
      ..._result,
    });
  }
};

module.exports = {
  login,
};
