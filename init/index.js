const mongoose = require("mongoose");
const quizData = require('./data.js');
const quizData2 = require('./data2.js');
const QuizQuestion = require("../models/quiz.js");
const QuizQuestion2 = require("../models/quiz2.js");
const mongo_url = "mongodb://127.0.0.1:27017/Quizanime";

main()
  .then(() => {
    console.log("mongoose started");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

const initDB = async () => {
    await QuizQuestion.deleteMany({});
    await QuizQuestion2.deleteMany({});
    await QuizQuestion.insertMany(quizData.data);
    await QuizQuestion2.insertMany(quizData2.data2);
    console.log("data was initialized");
  };
  
initDB();
