var express = require("express");

var router = express.Router();
// edit burger model to match sequelize
var db = require("../models/");

router.get("/api/burgers", function(req, res) {
  db.Burger.findAll()
    .then(function(burgerData) {
      res.json(burgerData);
    });
});

router.post("/api/burgers", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  })

    .then(function(result) {
      res.json({  id:result.insertId  });
    });
});

// post route
router.post("/api/burgers", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// put route
router.put("/api/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
