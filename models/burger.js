var orm = require("../config/orm.js");
var burger = {
    all:function(cb){
        orm.all("burger", function(){
            cb(res);
        });
    },
}

module.exports = burger;