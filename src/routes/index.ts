import express from "express";
import Controller from "../controllers";

const router = express.Router();

router.get("/:date", (req, res) => {
    console.log(req.params.date)
    res.json(Controller.getTimeAPI(req.params.date.toString()));
});

export default router;