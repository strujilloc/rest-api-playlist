const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

// req= request res= respond next= will go next piece of middleware
// get a list of ninjas from the db
router.get("/ninjas", (req, res, next) => {
  res.send({ type: "GET" });
});

// add new ninja to the db,
router.post("/ninjas", (req, res, next) => {
  /* let ninja = new Ninja(req.body);
  ninja.save();
   */
  // similar to above code, instead of save, create
  Ninja.create(req.body)
    .then(ninja => {
      res.send(ninja);
    })
    .catch(next);
});

// update a ninja in the db
router.put("/ninjas/:id", (req, res, next) => {
  res.send({ type: "PUT" });
});

// delete a ninja from the db
router.delete("/ninjas/:id", (req, res, next) => {
  res.send({ type: "DELETE" });
});

module.exports = router;
