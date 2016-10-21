/**
 * Created by Rookie_rebooter on 2016/10/20.
 */
var fs = require('fs');

var data=fs.readFileSync("../file/input.txt");

console.log(data.toString());
console.log("read finish")