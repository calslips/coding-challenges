// You will be given an array of numbers in which two numbers
// occur once and the rest occur only twice. Your task will
// be to return the sum of the numbers that occur only once.

// will the array always contain values? Never empty?
// will the values always be numbers? ints / floats?
// expect the return to be a number? ints / floats?

// For example, repeats([4,5,7,5,4,8]) = 15
// because only the numbers 7 and 8 occur once,
// and their sum is 15. Every other number occurs twice.

function repeats(array) {
  // filter the input array, only keeping unique values
  // add the remaining unique values together (should be 2)
  // return the sum of unique values
  return array
    .filter(n => array.indexOf(n) === array.lastIndexOf(n))
    .reduce((s, n) => s + n, 0)
}

console.log(repeats([4, 5, 7, 5, 4, 8]), 15)
console.log(repeats([9, 10, 19, 13, 19, 13]), 19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12)
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22)
console.log(repeats([5, 10, 19, 13, 10, 13]), 24)