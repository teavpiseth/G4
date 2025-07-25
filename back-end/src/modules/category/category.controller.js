const Model = require("./category.model");
const Validation = require("./category.validate");
const fs = require("fs");
const path = require("path");

const create = async (req, res) => {
  // return res.json({ message: "test", req: req.body, file: req.file });
  req.body.image = req.file?.path;
  const validate = await Validation.create(req, res);

  if (validate.result == false) {
    return res.status(400).json({
      data: validate.errors,
      message: "fail",
    });
  }

  const result = await Model.create(req, res);

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
  const result = await Model.get(req, res);
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
  req.body.image = req.file?.path || req.body.oldImage;

  const validate = await Validation.update(req, res);

  if (validate.result == false) {
    return res.status(400).json({
      data: validate.errors,
      message: "fail",
    });
  }

  if (req.file?.path) {
    const filePath = path.join(
      __dirname,
      "../../../uploads",
      req.body.oldImage
    );
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  const result = await Model.update(req, res);

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
  const validate = await Validation.remove(req, res);

  if (validate.result == false) {
    return res.status(400).json({
      data: validate.errors,
      message: "fail",
    });
  }
  const result = await Model.remove(req, res);

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

const getAll = async (req, res) => {
  const result = await Model.getAll(req, res);
  if (result) {
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

module.exports = {
  create,
  get,
  update,
  remove,
  getAll,
};
