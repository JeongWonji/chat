const express = require("express");
const router = express.Router();
const ctrl = require("./root.ctrl");

router.get("/", ctrl.process.server);

module.exports = router;
