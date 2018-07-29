const fs = require('fs'),
      uglifyJS = require("uglify-js");

var code = "function add(first, second) { return first + second; }";
var result = uglifyJS.minify(code);
// console.log(result);
if(result.err) throw result.err;
fs.writeFile("script.min.js", result.code, err => {
  if(err) throw err;
});
