var express = require("express");
var router = express.Router();

// Import the models 
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll({}, function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }, function(result) {
    // Send back the ID of the new burger item
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  db.Burger.update(
    {
      devoured: req.body.devoured
    },
    {
      where: {
        id: req.body.id
      }
    }, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
