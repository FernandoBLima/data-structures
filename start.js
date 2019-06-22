const Factorial = require('./Algorithms/factorial');
const Fibonacci = require('./Algorithms/fibonacci');


var fac = new Factorial()
// console.log(fac.factorialRecursive(5))
// console.log(fac.factorial(5))

var fibonacci = new Fibonacci()

console.log(fibonacci.fibonacci(8))
console.log(fibonacci.fibonacciRecursive(8))

var word = "HELLO";
var remainder2 = word.split(0, 3);
console.log(remainder2)
console.log(word)

var letter = word.charAt(0);
var remainder = word.substring(1);
console.log(letter)
console.log(remainder)
console.log(word[0])