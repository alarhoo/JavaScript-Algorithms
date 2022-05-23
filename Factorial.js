function factorial(num) {
    var factorial = 1;
    if (num > 0) {
        for (var i = num; i > 1; i--) {
            factorial *= i;
        }
    }
    return factorial;
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
