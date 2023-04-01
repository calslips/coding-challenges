/*
Create the function consecutive(arr) that takes an array of
integers and return the minimum number of integers needed to
make the contents of arr consecutive from the lowest number to
the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because
two numbers need to be added to the array (5 and 7) to make it
a consecutive array of numbers from 4 to 8. Numbers in arr will
be unique.

Parameters: an array of nums
Returns: a num
  count of nums needed to get input
  to contain consecutive nums
Examples:
  consecutive([4,8,6]), 2
  consecutive([1,2,3,4]), 0
  consecutive([]), 0
  consecutive([1]), 0
Pseudocode:
  initialize a count var assigned to 0
  initialize a min var assigned to infinity
  initialize a max var assigned to negative infinity
  reduce input into an obj to keep track of nums
    if current num is less than min
      reassign min to current num
    if current num is greater than max
      reassign max to current num
    add current num as a key in obj
    return obj
  create a loop to run over min + 1 to max
    if current num is not in obj
      increment count
  return count
*/

function consecutive(arr) {
  let count = 0, min = Infinity, max = -Infinity;
  const obj = arr.reduce((o, k) => (o[k] = 1, k < min && (min = k), k > max && (max = k), o), {});
  for (let i = ++min; i < max; i++) if (!obj[i]) count++;
  return count;
}