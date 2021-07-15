"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
router.get("/:date", (req, res) => {
    console.log(req.params.date);
    res.json(controllers_1.default.getTimeAPI(req.params.date.toString()));
});
exports.default = router;
