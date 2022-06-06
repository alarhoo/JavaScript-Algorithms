function factorial(num: number) {
  let factorial = 1;
  if (num > 0) {
    for (let i = num; i > 1; i--) {
      factorial *= i;
    }
  }
  return factorial;
}

console.time();
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(121));
console.log(factorial(155));
console.timeEnd();

function recursiveFactorial(num: number) {
  if (num === 0) return 1;
  return num * recursiveFactorial(num - 1);
}

console.time();
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(10));
console.log(recursiveFactorial(121));
console.log(recursiveFactorial(155));
console.timeEnd();
