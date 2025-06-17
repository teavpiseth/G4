const joi = require("joi");
const db = require("../../database/db");
const ProductModel = require("./product.model");

const create = async (req, res) => {
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
  if (result?.length > 0) {
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

  const result = await ProductModel.update(req, res);

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
