var connection = require("./connection.js");

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
        // if(err) throw(err);
      //   console.log(res);
      //      for(i=0; i<data.length; i++){
      //        console.log("Burger ID = " + data[i].id);
      //        console.log("Burger Name = " + data[i].id);
      //        console.log("Burger Available = " + data[i].id);
      //        console.log("-------------");
             
      //      }
      // });
  }
};
module.exports = orm;