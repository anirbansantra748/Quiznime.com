//SECTION - requirment part
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const QuizQuestion = require("./models/quiz.js");
const quizData = require('./init/data.js');

//SECTION - variable parts
const app = express();
const port = 3000;
const mongo_url = "mongodb://127.0.0.1:27017/Quizanime";

//SECTION - set up all
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//add the public folder to save css file

//SECTION - app.use section


async function main() {
  await mongoose.connect(mongo_url);
}
main()
  .then(() => {
    console.log("Mongoose started");
  })
  .catch((err) => {
    console.log(err);
  });

//SECTION - route handling

app.get("/quizanime", (req, res) => {
  res.render("pages/index.ejs");
});
app.get("/quizanime/home", (req, res) => {
  res.render("pages/home.ejs");
});



//SECTION - page 1
app.get("/quizanime/page1", (req, res) =>{
  res.render("pages/page1.ejs",{quizData:quizData.data});
});

app.listen(port, () => {
  console.log("app is listening");
});
