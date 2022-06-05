function isPowerOfTwo(num) {
    if (num < 1)
        return false;
    while (num > 1) {
        if (num % 2 !== 0) {
            return false;
        }
        num /= 2;
    }
    return true;
}
function isPowerOfTwoBitwise(num) {
    if (num < 1) {
        return false;
    }
    return (num & (num - 1)) === 0;
}
console.time();
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.timeEnd();
console.time();
console.log(isPowerOfTwoBitwise(1));
console.log(isPowerOfTwoBitwise(2));
console.log(isPowerOfTwoBitwise(5));
console.timeEnd();
