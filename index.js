const express = require("express");

// set up express app
const app = express();

//req = request res= respond
app.get("/api", (req, res) => {
  console.log("Get request");
  res.send({ name: "Yoshi" });
});

// listen for requests process.env.port explain in video #4
app.listen(process.env.PORT || 4000, () => {
  console.log("now listening for requests");
});
