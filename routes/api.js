const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

// req= request res= respond next= will go next piece of middleware
// get a list of ninjas from the db
router.get("/ninjas", (req, res, next) => {
  /* Ninja.find({}).then(ninjas => {
    res.send(ninjas);
  }); */
  Ninja.aggregate()
    .near({
      near: {
        type: "Point",
        coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
      },
      maxDistance: 100000,
      spherical: true,
      distanceField: "dist.calculated"
    })
    .then(ninjas => {
      res.send(ninjas);
    });
});

// add new ninja to the db,
router.post("/ninjas", (req, res, next) => {
  /* let ninja = new Ninja(req.body);
  ninja.save();
   */
  // similar to code above, instead of save, create
  Ninja.create(req.body)
    .then(ninja => {
      res.send(ninja);
    })
    .catch(next);
});

// update a ninja in the db
router.put("/ninjas/:id", (req, res, next) => {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Ninja.findOne({ _id: req.params.id }).then(updatedNinja => {
      res.send(updatedNinja);
    });
  });
});

// delete a ninja from the db
router.delete("/ninjas/:id", (req, res, next) => {
  Ninja.findByIdAndDelete({ _id: req.params.id }).then(removedNinja => {
    res.send(removedNinja);
  });
});

module.exports = router;
