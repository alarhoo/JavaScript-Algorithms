function isPrime(num) {
    if (num < 2)
        return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.time();
console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(5));
console.timeEnd();
