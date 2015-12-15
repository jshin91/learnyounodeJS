//write a program that accepts one or more numbers as command-line
//arguments and prints the sum of those numbers to the console.

var arrOutput = process.argv.slice(2);
var sum = 0;

arrOutput.forEach(function(item) {
  sum += +item;
});

console.log(sum);

