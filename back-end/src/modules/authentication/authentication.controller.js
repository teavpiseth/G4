const joi = require("joi");
const db = require("../../database/db");
const AuthModel = require("./authentication.model");
const productValidate = require("./authentication.validate");
const { successResponse, errorResponse } = require("../../helper/response");
const { getSecretKeyJWT } = require("../../helper/const");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const validate = await productValidate.login(req, res);

  if (validate.result == false) {
    return res.status(400).json({
      data: validate.errors,
      message: "fail",
    });
  }

  const result = await AuthModel.login(req, res);

  if (result?.result == true) {
    return res.status(200).json({
      data: result.data,
      message: "success",
    });
  } else {
    return res.status(401).json(errorResponse("unauthorized", 401));
  }
};

const refreshToken = async (req, res) => {
  const validate = await productValidate.refreshToken(req, res);

  if (validate.result == false) {
    return res.status(400).json({
      data: validate.errors,
      message: "fail",
    });
  }
  const result = jwt.verify(req.body.refreshToken, getSecretKeyJWT());

  if (result) {
    const payload = {
      user: result.user,
      id: result.id,
    };
    const newAccessToken = jwt.sign(payload, getSecretKeyJWT(), {
      expiresIn: "10m",
    });
    const newRefreshToken = jwt.sign(payload, getSecretKeyJWT(), {
      expiresIn: "1d",
    });
    return res.status(200).json({
      data: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      },
      message: "success",
    });
  } else {
    return res.status(401).json(errorResponse("unauthorized", 401));
  }
};

module.exports = {
  login,
  refreshToken,
};
