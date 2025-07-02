const express = require("express");
const router = express.Router();
const Controller = require("./authentication.controller");

router.post("/api/login", Controller.login);
router.post("/api/refresh-token", Controller.refreshToken);

module.exports = router;
