/*
Implement a function which behaves like the uniq command in UNIX.

It takes as input a sequence and returns a sequence in which all
duplicate elements following each other have been reduced to one
instance.

Parameters: an array
Returns: an array
  adjacent duplicates removed
Examples:
  uniq(['a','a','b','b','c','a','b','c','c'])
    // ['a','b','c','a','b','c']
Pseudocode:
  initialize new array variable assigned to an empty array
  iterate over the input array
    if current value is the same as last value in new array
      skip
    otherwise
      push current to new array
  return new array
*/

function uniq(a) {
  return a.reduce((r, c) => c === r[r.length - 1] ? r : [...r, c], []);
}

// function uniq(a) {
//   const result = [];
//   for (let e of a) !(e === result[result.length - 1]) && result.push(e);
//   return result;
// }