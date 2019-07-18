class Fibonacci {
    constructor() {}

    fibonacciRecursive(num) {
        if (num <= 1) return 1;
        return this.fibonacciRecursive(num - 1) + this.fibonacciRecursive(num - 2);
    };

    fibonacci(num){
        var a = 1, b = 0, temp;
        num = num - 2;
        while (num > 0){
          temp = a;
          a = a + b;
          b = temp;
          num--;
        }
        return a;
    }
}

module.exports = Fibonacci;