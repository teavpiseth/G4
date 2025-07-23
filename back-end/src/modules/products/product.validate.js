const joi = require("joi");
const { handleErrorDetail } = require("../../helper/validate");
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
    return { result: false, errors: handleErrorDetail(error) };
  }

  return { result: true, errors: null };
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
    return { result: false, errors: handleErrorDetail(error) };
  }

  return { result: true, errors: null };
};

const saveImages = async (req, res) => {
  const schema = joi
    .object({
      images: joi.array().items(joi.string()).min(1).required().messages({
        "array.base": "Images must be an array.",
        "array.min": "At least one image is required.",
        "any.required": "Images field is required.",
      }),
      product_id: joi.number().required(),
    })
    .unknown();

  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return { result: false, errors: handleErrorDetail(error) };
  }
  return { result: true, errors: null };
};

module.exports = { create, update, saveImages };
