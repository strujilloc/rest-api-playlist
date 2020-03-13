const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create ninja Schema & model
const NinjaSchema = new Schema({
  name: {
    type: String,
    require: [true, "name field is required"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
  //add geo location
});

const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja;
