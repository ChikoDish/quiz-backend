import express from "express";
let router = express.Router();
import Quiz from "../../models/quiz.js";

router.post("/add", async (req, res) => {
  try {
    let answers = [];
    answers.push(req.body.answer1);
    answers.push(req.body.answer2);
    answers.push(req.body.answer3);
    answers.push(req.body.answer4);
    let newQuiz = new Quiz();
    newQuiz.question = req.body.question;
    newQuiz.answers = answers;
    newQuiz.correctAnswer = req.body.correctAnswer;
    newQuiz.save(function (err, result) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  } catch (e) {
    res.status(500).json(null);
  }
});

router.get("/get", async (req, res) => {
  try {
    Quiz.find({}, (ee, rr) => {
      if (ee) {
        res.status(500).json(err);
      } else {
        res.status(200).json(rr);
      }
    });
  } catch {
    res.status(500).json(null);
  }
});
export default router;
