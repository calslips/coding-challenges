// Given an array of integers , Find the Nth smallest element in this array of integers.
// Notes
// Array/list size is at least 3 .
// Array/list's numbers could be a mixture of positives , negatives and zeros .
// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// the array will always contain numbers (min 3), numbers can be pos/neg/zero
// will it be unsorted? duplicates exist
// will there always be a 2nd arg that is a number? can it be neg? can it be out of range?
// always return the value asked for. what if the ask is out of range? null? undefined?

function nthSmallest(array, n) {
  // sort the array from smallest to largest
    // to avoid mutating the input array, will make a copy before sorting
  // access the value at index n - 1
  // return that value
  return [...array].sort((a, b) => a - b)[--n];
}

console.log(nthSmallest([3, 1, 2], 2), 2);
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7);
console.log(nthSmallest([177, 225, 243, -169, -12, -5, 2, 92], 5), 92);