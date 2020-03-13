const express = require("express");
const router = express.Router();

// req= request res= respond
// get a list of ninjas from the db
router.get("/ninjas", (req, res) => {
  res.send({ type: "GET" });
});

// add new ninja to the db
router.post("/ninjas", (req, res) => {
  console.log(req.body);
  res.send({ type: "POST", name: req.body.name, rank: req.body.rank });
});

// update a ninja in the db
router.put("/ninjas/:id", (req, res) => {
  res.send({ type: "PUT" });
});

// delete a ninja from the db
router.delete("/ninjas/:id", (req, res) => {
  res.send({ type: "DELETE" });
});

module.exports = router;
