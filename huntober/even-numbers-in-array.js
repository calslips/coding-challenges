// Given an array of digital numbers, return a new array of length
// number containing the last even numbers from the original array
// (in the same order). The original array will be not empty and
// will contain at least "number" even numbers.

// expect 2 params, an array of numbers and an integer.
// the array contains only integers (no floats)? never empty,
// can be pos/neg and will always contain some even nums
// the integer input will be the count of even nums to keep
// from input array (from right to left) kept in original order

function evenNumbers(array, num) {
  // filter out odd nums from input array
  // slice out the last num elements from filtered array
  // return sliced array
  return array.filter(n => !(n % 2)).slice(-num);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])