/*
Write a code that receives an array of numbers or strings, goes
one by one through it while taking one value out, leaving one
value in, taking, leaving, and back again to the beginning until
all values are out.
It's like a circle of people who decide that every second person
will leave it, until the last person is there. So if the last
element of the array is taken, the first element that's still
there, will stay.
The code returns a new re-arranged array with the taken values by
their order. The first value of the initial array is always taken.

Parameters: an array of values
Returns: an array containing values from the input array
  placed in an alternating fashion
Examples:
  yesNo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    [ 1, 3, 5, 7, 9, 2, 6, 10, 8, 4 ]
  yesNo(['this', 'code', 'is', 'right', 'the']),
    [ 'this', 'is', 'the', 'right', 'code' ]
Pseudocode:
  initialize a result variable assigned to an empty array
  initialize index to 0
  initialize a take variable to true
  while the input array contains values, loop over it
    if take is true
      remove value at current index and add it to result
      decrement index to account for removed value
      invert take to false
    otherwise
      invert take to true
    if index is still valid for the input array size
      increment its value
    otherwise
      reset it to 0
  return result
*/

function yesNo(arr) {
  let res = [], i = 0, take = true;
  while (arr.length) {
    if (take) res.push(...arr.splice(i--, 1));
    take = !take, i < arr.length - 1 ? i++ : i = 0;
  }
  return res;
}