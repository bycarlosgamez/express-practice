const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");
const PORT = 2121;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST");
//   res.send("This is a response");
// });

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random.ejs", { rand: num });
});

app.get("/guitars", (req, res) => {
  const guitars = [
    "jaguar",
    "jazzmaster",
    "telecaster",
    "mustang",
    "stratocaster",
  ];
  res.render("guitars.ejs", { guitars });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render(`subreddit.ejs`, { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`Search results for: ${q}`);
});

app.get("*", (req, res) => {
  res.send("Path not found");
});

app.listen(PORT, () => {
  console.log(`Your server is running on PORT ${PORT}, you better catch it!!`);
});
