const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  question:String,
  options:[String],
  answer:String,
});

const QuizQuestion = mongoose.model("QuizQuestion",quizSchema);
module.exports = QuizQuestion;