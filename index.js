const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");

// set up express app
const app = express();

app.use(bodyParser.json());
//initialize routes
app.use("/api", routes);

// listen for requests process.env.port explain in video #4
app.listen(process.env.PORT || 4000, () => {
  console.log("now listening for requests");
});
