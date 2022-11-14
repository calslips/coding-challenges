// You need to create a function that when provided with a triplet,
// returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers.

// expect an array containing 3 elements, always numbers? random order? unique!
// return a number; the index of the value that is NOT the min or max

// linear
function gimme(arr) {
  // get min value of input array
  // get max value of input array
  // find index of value in array that is NOT min AND NOT max
  // return index
  const min = Math.min(...arr), max = Math.max(...arr);
  return arr.findIndex(n => !(n === min || n === max));
}

console.log(gimme([2, 3, 1]), 0);
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

console.log(gimme([5, 10, 14]), 1);
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

console.log(gimme([35, 14, 21]), 2);