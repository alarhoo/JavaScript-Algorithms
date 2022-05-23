/**
 *
 * @param {number} number
 * @returns Array[number]
 */
function fibonacci(number) {
    var fib_series = [];
    if (number === 1) {
        fib_series = [0];
    }
    else {
        fib_series = [0, 1];
    }
    for (var i = 2; i < number; i++) {
        fib_series[i] = fib_series[i - 1] + fib_series[i - 2];
    }
    return fib_series;
}
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(8));
console.log(fibonacci(10));
