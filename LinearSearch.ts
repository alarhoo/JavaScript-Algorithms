function LinearSearch(numbers: number[], elem: number) {
  let index = -1;
  numbers.forEach((num, idx) => {
    if (num === elem) {
      index = idx;
    }
  });
  return index;
}

console.time();
console.log(LinearSearch([-5, 2, 10, 4, 6], 10));
console.log(LinearSearch([-5, 2, 10, 4, 6], 6));
console.log(LinearSearch([-5, 2, 10, 4, 6], 20));
console.timeEnd();
