//write a program that uses a single synchronous filesystem operation
//to read a file and pring the number of newlines it contains

var fs = require('fs')

var file = process.argv[2];

var fileToString = fs.readFileSync(file).toString();

var newLines = fileToString.split("\n").length - 1;

console.log(newLines);

