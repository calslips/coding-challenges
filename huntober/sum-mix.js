/**
 * Given an array of integers as strings and numbers,
 * return the sum of the array values as if all were numbers.
Return your answer as a number.
 */

// expected input? an array of numbers and strings.
// will the string always be easily converted to a number?
// always an integer, no floats?
// will the expected return be of number type?

function sumMix(nums) {
  // initialize a result var assigned to 0
  // iterate over the nums array
    // if current value is a string
      // convert to number
    // add current number to result
  // return result
  return nums.reduce((s, n) => s + +n, 0);
}

console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)