const joi = require("joi");
const { handleErrorDetail } = require("../../helper/validate");
const login = async (req, res) => {
  const schema = joi
    .object({
      tel: joi.string().required(),
      password: joi.string().required(),
    })
    .unknown();

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return { result: false, errors: handleErrorDetail(error) };
  }

  return { result: true, errors: null };
};

module.exports = { login };
