// It's the academic year's end, fateful moment of your school report.
// The averages must be calculated. All the students come to you and
// entreat you to calculate their average for them.
// Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

// expect an array of integers. possible floats? never empty, always a num
// return a single integer, rounded down

function getAverage(array) {
  // initialize a sum var assigned to 0
  // iterate over the input array
    // add each value to sum
  // get avg by dividing sum by input length
  // round avg down to whole num
  // return rounded avg
  return Math.floor(array.reduce((s, n) => s + n, 0) / array.length);
}

console.log(getAverage([2,2,2,2]), 2)
console.log(getAverage([1,2,3,4,5]), 3)
console.log(getAverage([1,1,1,1,1,1,1,2]), 1)