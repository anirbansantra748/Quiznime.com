const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const quizData = require("./init/data.js");
const quizData2 = require("./init/data2.js");

const app = express();
const port = 3000;
const mongo_url = "mongodb://127.0.0.1:27017/Quizanime";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(
  session({ secret: "mysecret", resave: false, saveUninitialized: true })
);

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

// Initialize high score to 0 in the session
app.use((req, res, next) => {
  if (!req.session.highScore) {
    req.session.highScore = 0;
  }
  next();
});

app.get("/quizanime", (req, res) => {
  res.render("pages/index.ejs");
});

app.get("/quizanime/home", (req, res) => {
  if (req.session.userScore) {
    req.session.userScore = 0;
    req.session.currQuestion = 0;
  }
  res.render("pages/home.ejs");
});

app.get("/quizanime/Quiz1", (req, res) => {
  res.render("pages/quiz_overlay.ejs");
});

app.get("/quizanime/result", (req, res) => {
  const userScore = req.session.userScore;
  const highScore = req.session.highScore;
  req.session.highScore = Math.max(userScore, highScore); // Update the high score
  res.render("pages/result.ejs", { userScore, highScore });
});

app.get("/quizanime/page1", (req, res) => {
  if (!req.session.userScore) {
    req.session.userScore = 0;
    req.session.currQuestion = 0;
  }
  const currQuestion = req.session.currQuestion;
  const userScore = req.session.userScore;

  if (currQuestion < quizData.data.length) {
    const question = quizData.data[currQuestion];
    res.render("pages/page1.ejs", {
      question,
      score: userScore,
      length: currQuestion,
      totalQuestions: quizData.data.length,
    });
  } else {
    res.redirect("/quizanime/result");
  }
});

app.post("/quizanime/page1", (req, res) => {
  const userAnswer = req.body.userAnswer;
  const currQuestion = req.session.currQuestion;

  if (userAnswer == quizData.data[currQuestion].answer) {
    req.session.userScore += 1;
  }
  req.session.currQuestion += 1;
  res.redirect("/quizanime/page1");
});

//SECTION - page 2
app.get("/quizanime/page2", (req, res) => {
  if (!req.session.userScore) {
    req.session.userScore = 0;
    req.session.currQuestion = 0;
  }
  const currQuestion = req.session.currQuestion;
  const userScore = req.session.userScore;

  if (currQuestion < quizData2.data2.length) {
    const question = quizData2.data2[currQuestion];
    res.render("pages/page2.ejs", {
      question,
      score: userScore,
      length: currQuestion,
      totalQuestions: quizData2.data2.length,
    });
  } else {
    res.redirect("/quizanime/result");
  }
});

app.post("/quizanime/page2", (req, res) => {
  const userAnswer = req.body.userAnswer;
  const currQuestion = req.session.currQuestion;

  if (userAnswer == quizData2.data2[currQuestion].answer ) {
    req.session.userScore += 1;
  }
  req.session.currQuestion += 1;
  res.redirect("/quizanime/page2");
});

app.listen(port, () => {
  console.log("App is listening on port " + port);
});
