const express = require("express");
const app = express();
const path = require("path");
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

app.get("/r/:rappers", (req, res) => {
  const { rappers } = req.params;
  res.render(`rappers.ejs`, { rappers });
});

app.get("/r/:rappers/:lyrics", (req, res) => {
  const { rappers, lyrics } = req.params;
  res.send(
    `This is ${rappers}'s page, currently looking at lyrics for ${lyrics}`
  );
});

app.get("/21savage", (req, res) => {
  res.send(`2121212121212121`);
});

app.get("/kendrick", (req, res) => {
  res.send("I'm so fuckin' sick and tired of the Photoshop");
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
