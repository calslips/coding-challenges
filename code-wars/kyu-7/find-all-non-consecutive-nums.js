/*
Your task is to find all the elements of an array that are non
consecutive.
A number is non consecutive if it is not exactly one larger than
the previous element in the array. The first element gets a pass
and is never considered non consecutive.

Create a function named allNonConsecutive

E.g., if we have an array [1,2,3,4,6,7,8,15,16] then 6 and 15 are
non-consecutive.

You should return the results as an array of objects with two values
  i: <the index of the non-consecutive number> and
  n: <the non-consecutive number>.
E.g., for the above array the result should be:
[
  {i: 4, n:6},
  {i: 7, n:15}
]

If the whole array is consecutive or has one element then return an
empty array.
The array elements will all be numbers. The numbers will also all
be unique and in ascending order. The numbers could be positive
and/or negetive and the gap could be larger than one.

Parameters: an array of nums
Returns: an array of objects
  each containing the index && num of the
  non consecutive values found in input
Examples:
  allNonConsecutive([1,2,3,4,6,7,8,10], [{i: 4, n:6}, {i: 7, n:10}]
Pseudocode:
  initialize a result var assigned to an empty array
  iterate over the input arr starting at index 1
    if the current value is NOT equal to the last value + 1
      create an obj with
        key 'i' equal to the current index and
        key 'n' equal to the current value
      push obj to result arr
  return result arr
*/

const allNonConsecutive = a => a.reduce((r, n, i) => (i && n !== ++a[i - 1] && r.push({i, n}), r), []);

function allNonConsecutive(a) {
  return a.reduce((r, n, i) => (i && n !== ++a[i - 1] && r.push({i, n}), r), []);
}

function allNonConsecutive(arr) {
  const result = [];
  for (let i = 1; i < arr.length; i++) if (arr[i] !== ++arr[i - 1]) result.push({i, n: arr[i]});
  return result;
}