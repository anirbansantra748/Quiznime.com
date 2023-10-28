//SECTION - requirment part
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

//SECTION - variable parts
const app = express();
const port = 3000;
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

//SECTION - set up all
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
app.get("/", (req, res) => {
  res.send("bhopendra jogi");
});

app.get("/quizanime", (req, res) => {
  res.render("pages/index.ejs");
});


app.listen(port, () => {
  console.log("app is listening");
});
