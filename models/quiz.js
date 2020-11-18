import mongoose from "mongoose";

let quizSchema = mongoose.Schema({
  question: {
    type: String,
  },
  answers: {
    type: [],
  },
  correctAnswer: {
    type: String,
  },
});
export default mongoose.model("quizs", quizSchema);
