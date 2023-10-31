const mongoose = require("mongoose");
const quizData = require('./data.js');
const QuizQuestion = require("../models/quiz.js");
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
    await QuizQuestion.insertMany(quizData.data);
    console.log("data was initialized");
  };
  
initDB();
