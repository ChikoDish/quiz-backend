import express from "express";
let router = express.Router();
import Quiz from "./controllers/quiz.js";

router.use("/", Quiz);
export default router;
