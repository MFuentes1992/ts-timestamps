"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1["default"].Router();
router.get("/:date", function (req, res) {
    console.log(req.params.date);
    res.json(controllers_1["default"].getTimeAPI(req.params.date.toString()));
});
exports["default"] = router;
