const joi = require("joi");
const { handleErrorDetail } = require("../../helper/validate");
const create = async (req, res) => {
  const schema = joi
    .object({
      name: joi.string().required(),
      description: joi.string().required(),
      // slug: joi.string().allow(null).required(), // null allowed
      status: joi.number().required(),

      // allow string and number
      parent_id: joi
        .alternatives()
        .try(joi.string(), joi.number(), joi.valid(null))
        .required(),
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
      // slug: joi.string().allow(null).required(), // null allowed
      status: joi.number().required(),
      parent_id: joi
        .alternatives()
        .try(joi.string(), joi.number(), joi.valid(null))
        .required(),
    })
    .unknown();

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return { result: false, errors: handleErrorDetail(error) };
  }

  return { result: true, errors: null };
};

const remove = async (req, res) => {
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
  return { result: true, errors: null };
};

module.exports = { create, update, remove };
