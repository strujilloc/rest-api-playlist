const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// set up express app
const app = express();

//Conect to mongodb
mongoose.connect("mongodb://localhost:27017/ninjago", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// first middleware evaluate body parser

app.use(bodyParser.json());

//2nd middleware initialize routes
app.use("/api", routes);

// 3rd middleware handling error
app.use((err, req, res, next) => {
  //console.log(err);
  res.status(422).send({ error: err.message });
});

// listen for requests process.env.port explain in video #4
app.listen(process.env.PORT || 4000, () => {
  console.log("now listening for requests");
});
