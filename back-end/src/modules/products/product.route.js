const express = require("express");
const router = express.Router();
const ProductController = require("./product.controller");
const upload = require("../../middleware/uploadFile");

router.post("/api/product", ProductController.create);
router.put("/api/product", ProductController.update);
router.delete("/api/product", ProductController.remove);
router.get("/api/product", ProductController.get);
router.post(
  "/api/product-image",
  upload.array("images", 5),
  ProductController.saveImages
);

router.get("/api/web-site/product", ProductController.get);

module.exports = router;
