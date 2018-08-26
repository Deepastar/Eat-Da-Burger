var express = require("express");
var router = express.Router();
var cat = require("../models/burger.js");

// --Here my code goes--

router.get("/", function (req, res) {
    burgers.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name",
    ], [
            req.body.burger_name,
        ], function (result) {
            res.json({ id: result.insertId });
        });
});



module.exports = router;