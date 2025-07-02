const joi = require("joi");
const db = require("../../database/db");
const ProductModel = require("./product.model");
const productValidate = require("./product.validate");

const create = async (req, res) => {
  const validate = await productValidate.create(req, res);

  if (validate.result == false) {
    return res.status(400).json({
      data: validate.errors,
      message: "fail",
    });
  }

  const result = await ProductModel.create(req, res);

  if (result?.affectedRows == 1) {
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
};

const get = async (req, res) => {
  const result = await ProductModel.get(req, res);
  if (result.status == "success") {
    res.json({
      message: "Response success",
      status: 200,
      data: result,
    });
  } else {
    res.json({
      message: "Response fail",
      status: 500,
      data: [],
    });
  }
};

const update = async (req, res) => {
  const validate = await productValidate.update(req, res);

  if (validate.result == false) {
    return res.status(400).json({
      data: validate.errors,
      message: "fail",
    });
  }
  console.log("after validate ");
  const result = await ProductModel.update(req, res);
  console.log("after update sql");
  if (result?.affectedRows == 1) {
    res.json({
      message: "update success",
      status: 200,
    });
  } else {
    res.json({
      message: "update fail",
      status: 500,
    });
  }
};

const remove = async (req, res) => {
  const result = await ProductModel.remove(req, res);

  if (result?.affectedRows == 1) {
    res.json({
      message: "delete success",
      status: 200,
    });
  } else {
    res.json({
      message: "delete fail",
      status: 500,
    });
  }
};

module.exports = {
  create,
  get,
  update,
  remove,
};
