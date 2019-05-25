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
      res.json({ id: result.insertId });
    });
});


router.put("/api/burgers/:id", function(req, res) {
  db.Burger.update({
    devoured: true
  },
  {
    where: {
      id: req.params.id
    }
  }
  ).then(function(result) {
    res.sendStatus(200);
  });
});

module.exports = router;