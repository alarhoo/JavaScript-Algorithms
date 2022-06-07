function BinarySearch(numbers, target) {
    let leftIndex = 0;
    let rightIndex = numbers.length - 1;
    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === numbers[midIndex]) {
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
function recursiveBinarySearch(numbers, target) {
    return search(numbers, target, 0, numbers.length - 1);
}
function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[midIndex]) {
        return midIndex;
    }
    if (target < arr[midIndex]) {
        return search(arr, target, leftIndex, midIndex - 1);
    }
    else {
        return search(arr, target, midIndex + 1, rightIndex);
    }
}
console.time();
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));
console.timeEnd();
