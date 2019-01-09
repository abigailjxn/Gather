var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Event.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load index page
  app.get("/event", function(req, res) {
    db.Event.findAll({}).then(function(dbExamples) {
      res.render("event", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/event/:eventCode", function(req, res) {
    db.Event.findOne({
      where: {
        eventCode: req.params.eventCode
      }
    }).then(function(data) {
      res.render("event", {
        msg: "Welcome!",
        eventData: data
      });
    });
  });
 
// Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

