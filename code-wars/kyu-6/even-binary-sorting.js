/*
Given a string of binary numbers of length 3 sort the numbers
in ascending order but only order the even numbers and leave
all odd numbers in their place.

Example:
evenBinary("101 111 100 001 010") // returns "101 111 010 001 100"

Note: make sure all the binary numbers have a length of 3

Parameters: a string
  (space separated binary)
Returns: a string
  (even binary sorted, odds left alone)
Examples:
  evenBinary("101 111 100 001 010") // "101 111 010 001 100"
  evenBinary("110 011 001 100 101") // "100 011 001 110 101"
Pseudocode:
  initialize evens var assigned to an empty arr
  initialize bins var assigned to input str converted to array
  iterate over the bins array
    push even bins to evens array
  sort evens array descending
  reduce bins array
    keep odds in place
    replace current even with last bin from evens (popped)
    return modified accumulator (start with bins)
  return modified bins array converted to string (joined on space)
*/

function evenBinary(n) {
  const evens = [], bins = n.split(' ');
  bins.forEach(b => !(b % 2) && evens.push(b));
  evens.sort((a, b) => b - a);
  return bins.reduce((r, b, i) => b % 2 ? r : (r[i] = evens.pop(), r), bins).join(' ');
}