function isPrime(num: number) {
  if (num < 2) return false;
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(5));
