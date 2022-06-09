/*
Here's another staple for the functional programmer. You have a sequence
of values and some predicate for those values. You want to get the longest
prefix of elements such that the predicate is true for each element. We'll
call this the takeWhile function. It accepts two arguments. The first is
the sequence of values, and the second is the predicate function. The
function does not change the value of the original sequence.

function isEven(num) {
  return num % 2 === 0;
}
var seq = [2,4,6,8,1,2,5,4,3,2];

takeWhile(seq, isEven) // -> [2,4,6,8]
Your task is to implement the takeWhile function.

Parameters: an array of numbers, callback function
Returns:
  a new array of values from the input array
  which satisfy the condition in the callback
  (only up to, but not including,
  the first element that does NOT satisfy the callback condition)
Examples:
  takeWhile([2, 6, 4, 10, 1, 5, 4, 3], isEven) // [2, 6, 4, 10]
  takeWhile([2,100,1000,10000,5,3,4,6], isEven) // [998,996,12,-1000,200,0]
  takeWhile([1,5,111,1111,2,4,6,4,5], isOdd) // [1,5,111,1111]
  takeWhile([-1,-5,127,86,902,2,1], isOdd) // [-1,-5,127]
Pseudocode:
  initialize a result array assigned to an empty array
  loop over input array
    if current element satisfies callback condition
      push current element to result array
    otherwise
      break out of loop
  return result array
*/

function takeWhile (arr, pred) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (pred(arr[i])) {
      result.push(arr[i])
    } else {
      break;
    }
  }
  return result;
}