var express = require("express");
var router = express.Router();

// add routes folder - these files require controller and execute the functions in controller
// in controllerers
// get function(db,cb) {app.get ('/burger').......
//route uses the controller


// Import the model (burger.js) to use its database functions.
var db = require("../models/");

router.get("/", function (req, res) {
    db.Burger.findAll()
        .then((allBurgers) => {
            var hbsObject = {
                burgers: allBurgers
            };
            res.render("index", hbsObject);
        });
});

router.post("/createBurger", function (req, res) {
    db.Burger.create({
            burger_name: req.body.newBurger
        })
        .then(() => {
            res.redirect("/");
        });
});

router.post("/devourBurger/:id", function (req, res) {
    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;