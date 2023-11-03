const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema2 = new Schema({
  url:String,
  options:[String],
  answer:String,
});

const QuizQuestion2 = mongoose.model("QuizQuestion2",quizSchema2);
module.exports = QuizQuestion2;