/**
 * Created by Rookie_rebooter on 2016/10/20.
 */
var fs = require('fs');

var data=fs.readFile("../file/input.txt" ,function (error,data) {
    if(error) return console.log(error);
    console.log(data.toString());

});

console.log("read finish")