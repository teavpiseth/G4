const joi = require("joi");
const db = require("../../database/db");
const AuthModel = require("./authentication.model");
const productValidate = require("./authentication.validate");
const { successResponse, errorResponse } = require("../../helper/response");

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
    res.json(successResponse(_result.data));
  } else {
    res.status(500).json(errorResponse(_result.message));
  }
};

module.exports = {
  login,
};
