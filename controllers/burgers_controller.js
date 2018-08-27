var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


// --Here my code goes--

function selectAll(res){
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
        // res.json(hbsObject);
    });
}

router.get("/", function (req, res) {
    selectAll(res);
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    burger.create(["burger_name"], [req.body.burger_name], function (result) {
            if(result.insertId != 0){
                selectAll(res);
            }
            // res.json({ id: result.insertId });
        });
});

router.post("/api/burgers/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: 1
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
       selectAll(res);
      }
    });
  });
  

module.exports = router;