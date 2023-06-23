/*
You're working in a number zoo, and it seems that one of the
umbers has gone missing!

Zoo workers have no idea what number is missing, and are too
incompetent to figure it out, so they're hiring you to do it
for them.

In case the zoo loses another number, they want your program
to work regardless of how many numbers there are in total.

Task:
Write a function that takes a shuffled list of unique numbers
from 1 to n with one element missing (which can be any number
  including n). Return this missing number.

Note: huge lists will be tested.

Examples:
[1, 3, 4]  =>  2
[1, 2, 3]  =>  4
[4, 2, 3]  =>  1

Parameters: an array of nums
Returns: a num
Examples:
  findNumber([1,3,4,5,6,7,8]), 2
  findNumber([7,8,1,2,4,5,6]), 3
  findNumber([1,2,3,5]), 4
  findNumber([1,3]), 2
  findNumber([2,3,4]), 1
  findNumber([13,11,10,3,2,1,4,5,6,9,7,8]), 12
  findNumber([1,2,3]), 4
Pseudocode:
  initialize a hash to contain num as key
  convert hash to array of keys (converted to nums)
  iterate over keys
    if current does not equal its index plus 1
      return index plus 1
  return length of keys array plus 1
*/

function findNumber(array) {
  const hash = array.reduce((o, k) => (o[k] = 1, o), {}),
        keys = Object.keys(hash),
        missing = keys.findIndex((k, i) => k != i + 1) + 1;
  return missing > 0 ? missing : keys.length + 1;
}

// using Gauss' summation
function findNumber(array) {
  return (array.length + 1) * (array.length + 2) / 2 - array.reduce((s, n) => s + n, 0);
}