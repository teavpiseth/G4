const express = require("express");
const router = express.Router();
const ProductController = require("./product.controller");

router.post("/api/product", ProductController.create);
router.put("/api/product", ProductController.update);
router.delete("/api/product", ProductController.remove);
router.get("/api/product", ProductController.get);

module.exports = router;
