const express = require("express");
const router = express.Router();
const CategoryController = require("./category.controller");
const upload = require("../../middleware/uploadFile");

router.post("/api/category", upload.single("image"), CategoryController.create);
router.put("/api/category", upload.single("image"), CategoryController.update);
router.delete("/api/category", CategoryController.remove);
router.get("/api/category", CategoryController.get);
router.get("/api/category/all", CategoryController.getAll);

router.get("/api/web-site/category/all", CategoryController.get);

module.exports = router;
