function BinarySearch(numbers, target) {
    let leftIndex = 0;
    let rightIndex = numbers.length - 1;
    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target == numbers[midIndex]) {
            return midIndex;
        }
        if (target < numbers[midIndex]) {
            rightIndex = midIndex - 1;
        }
        else {
            leftIndex = midIndex + 1;
        }
    }
    return -1;
}
console.time();
console.log(BinarySearch([-5, 2, 4, 6, 10], 10));
console.log(BinarySearch([-5, 2, 4, 6, 10], 6));
console.log(BinarySearch([-5, 2, 4, 6, 10], 20));
console.timeEnd();
