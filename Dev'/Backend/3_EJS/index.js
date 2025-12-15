const express = require("express");
const app = express();
const path = require("path");

let port = 3000;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
// this above line is just used to access from parent directory as we did for views directory

// by default every static files that are fetched are fetched from 'public' folder only by express
// for changing the name 'public' we have to use a function
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// by default every templates that are fetched are fetched from ;views' folder only by express
// for changing the name 'views' we have to use a function
app.get("/hello", (req, res) => {
  res.send("this is home");
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  // here we are assuming that the above value is coming from the database
  res.render("rolldice", { diceVal });
  // as a second argument, here we are passing diceVal as an object containing key value pair
  // But one thing, data is coming from database
  // Earlier, we were passing our file name, but now we pass one more argument which is an object
  // under res.render, this object is basically the ejs template
  // we generally pass single value which is key, value itself
});

// app.get("/ig/:username", (req, res) => {
//   let { username } = req.params;
//   res.render("instagram.ejs", { username });
// });

// app.get("/ig/:username", (req, res) => {
//     let followers = ["abc", "def", "ghi", "jkl", "mno", "pqr"];
//   let { username } = req.params;
//   res.render("instagram.ejs", { username, followers });
// });

app.get("/ig/:username", (req, res) => {
  const { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  console.log(data);
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio.ejs");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
