
//write a program that uses a single asynchronous filesystem operation
//to read a file and pring the number of newlines it contains

var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, 'utf8', function (err, data) {
  if(!err) {
    var newLines = data.split("\n").length-1;
    console.log(newLines);
  }
});

