const express = require("express");
const app = express();
const PORT = 2121;

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST");
//   res.send("This is a response");
// });

app.get("/21savage", (req, res) => {
  res.send(`2121212121212121`);
});

app.get("/kendrick", (req, res) => {
  res.send("I'm so fuckin' sick and tired of the Photoshop");
});

app.get("*", (req, res) => {
  res.send("Path not found");
});

app.listen(PORT, () => {
  console.log(`Your server is running on PORT ${PORT}, you better catch it!!`);
});
