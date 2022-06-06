/**
 * Given a number 'n', find the first 'n'
 * @param {number} number
 * @returns Array[number]
 */

function fibonacci(number: Number): Number[] {
  let fib_series = [];
  if (number === 1) {
    fib_series = [0];
  } else {
    fib_series = [0, 1];
  }
  for (let i = 2; i < number; i++) {
    fib_series[i] = fib_series[i - 1] + fib_series[i - 2];
  }
  return fib_series;
}

console.time();
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(8));
console.log(fibonacci(10));
console.timeEnd();

function recursiveFibonacci(num: number) {
  if (num < 2) return num;
  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

console.time();
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(5));
console.log(recursiveFibonacci(8));
console.log(recursiveFibonacci(10));
console.timeEnd();

