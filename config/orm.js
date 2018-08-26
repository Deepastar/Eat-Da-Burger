var connection = require("./connection.js");

var orm = {
    // select: function(whatToSelect, tableInput) {
    //   var queryString = "SELECT ?? FROM ??";
    //   connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    // },


    selectAll: function(){
      connection.query("SELECT * FROM burgers", function(err, res){
        // if(err) throw(err);
        console.log(res);
           for(i=0; i<data.length; i++){
             console.log("Burger ID = " + data[i].id);
             console.log("Burger Name = " + data[i].id);
             console.log("Burger Available = " + data[i].id);
             console.log("-------------");
             
           }
      });
    }
  };
module.exports = orm;