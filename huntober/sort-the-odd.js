// You will be given an array of numbers.
// You have to sort the odd numbers in ascending order
// while leaving the even numbers at their original positions.

// takes in an array of nums
// always an array? never another data type? always nums? never empty?
// returns an array of nums
// all the odd nums sorted ascending and the evens at original index

// n log n
function sortArray(arr) {
  // initialize a sorted odds array, assigned to
    // input filtered to only include odds &
    // sort descending
  // map over input array
    // if current element is odd
      // replace it with popped off value from sorted odds array
  // return mapped array

  const sortedOdds = arr.filter(n => n % 2).sort((a, b) => b - a);
  return arr.map(n => n % 2 ? sortedOdds.pop() : n);
}

console.log(sortArray([7, 1]), [1, 7]);
console.log(sortArray([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4]);
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]);
console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);