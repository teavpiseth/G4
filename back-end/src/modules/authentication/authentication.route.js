const express = require("express");
const router = express.Router();
const Controller = require("./authentication.controller");

router.post("/api/login", Controller.login);

module.exports = router;
