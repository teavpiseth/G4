const express = require("express");
const router = express.Router();
const CategoryController = require("./category.controller");

router.post("/api/category", CategoryController.create);
router.put("/api/category", CategoryController.update);
router.delete("/api/category", CategoryController.remove);
router.get("/api/category", CategoryController.get);
router.get("/api/category/all", CategoryController.getAll);

module.exports = router;
