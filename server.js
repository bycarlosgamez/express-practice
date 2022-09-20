const express = require("express");
const app = express();
const PORT = 2121;

app.use(() => {
  console.log("WE GOT A NEW REQUEST");
});

app.listen(PORT, () => {
  console.log(`Your server is running on PORT ${PORT}, you better catch it!!`);
});
