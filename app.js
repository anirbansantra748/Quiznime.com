//SECTION - requirment part
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const QuizQuestion = require("./models/quiz.js");
const quizData = require("./init/data.js");
const session = require("express-session");


//SECTION - variable parts
const app = express();
const port = 3000;
const mongo_url = "mongodb://127.0.0.1:27017/Quizanime";

//SECTION - set up all
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//add the public folder to save css file

//SECTION - app.use section
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "mysecret", resave: false, saveUninitialized: true }));
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
  if(req.session.userScore){
    req.session.userScore = 0;
    req.session.currQuestion = 0;
  }
  res.render("pages/home.ejs");
});


//SECTION - page 1
app.get("/quizanime/page1", (req, res) => {
  if(!req.session.userScore){
    req.session.userScore = 0;
    req.session.currQuestion = 0;
  }
  let currQuestion = req.session.currQuestion;
  let userScore = req.session.userScore;

  if(currQuestion < quizData.data.length){
    const question = quizData.data[currQuestion];
    res.render("pages/page1.ejs",{question,score:userScore,length:currQuestion,totalQuestions: quizData.data.length});
  }else {
    req.session.userScore = 0;
    req.session.currQuestion = 0;
    res.send(`Your final score is ${userScore}`);
  }
});

//SECTION - check rout
app.post("/quizanime/page1", (req, res) => {
  //user answer
  const userAnswer = req.body.userAnswer;
  let currQuestion = req.session.currQuestion;
  //check answer
  if(userAnswer == quizData.data[currQuestion].answer){
    req.session.userScore += 1;
  }
  req.session.currQuestion += 1;
  res.redirect("/quizanime/page1");
});

app.listen(port, () => {
  console.log("app is listening");
});
