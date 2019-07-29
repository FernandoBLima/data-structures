class Factorial {

    constructor() {}

    factorialRecursive(number) {
        return number > 1 ? number * this.factorialRecursive(number - 1) : 1;
    }

    factorial(number){
        let result = number;
        for (let index = number - 1; index > 0; index--){
            result *= index;
        }
        return result;
    }
}

module.exports = Factorial;