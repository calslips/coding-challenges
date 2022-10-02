/*
Run-length encoding (RLE) is a very simple form of data compression
in which runs of data (that is, sequences in which the same data
  value occurs in many consecutive data elements) are stored as a
  single data value and count, rather than as the original run.
  Wikipedia

Task
Your task is to write such a run-length encoding. For a given string,
return a list (or array) of pairs (or arrays)
[ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct
the original string by replicating the character sx ix times and
concatening all those strings. Your run-length encoding should be
minimal, ie. for all i the values si and si+1 should differ.

Examples
As the article states, RLE is a very simple form of data compression.
It's only suitable for runs of data, as one can see in the following
example:

runLengthEncoding("hello world!")
 //=> [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]

It's very effective if the same data value occurs in many consecutive data elements:

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
 // => [[34,'a'], [3,'b']]

Parameters: a string
Returns: an array of arrays
  subarrays are tuples,
    1st value is a number
    2nd value a string (char)
Examples:
  runLengthEncoding("") // []
  runLengthEncoding("abc") // [[1,'a'],[1,'b'],[1,'c']]
  runLengthEncoding("aab") // [[2,'a'],[1,'b']]
  runLengthEncoding("hello world!")
    // [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]
  runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
    // [[34,'a'], [3,'b']]
  runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW")
    // [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]
Pseudocode:
  initialize a result var assigned to an empty array
  iterate over the chars of the input string
    initialize a count var assigned to 1
    create an inner loop, while current char equals next char
      increment index and count
    push sub array containing count and char to result array
  return result array
*/

const runLengthEncoding = function(str) {
  let result = [], count = 1;
  for (let i = 0; i < str.length; i++) str[i] === str[i + 1] ? count++ : result.push([count, str[i]]) && (count = 1);
  return result;
}

// const runLengthEncoding = function(str) {
//   const result = [];
//   for (let i = 0; i < str.length; i++) {
//     let count = 1;
//     while (str[i] === str[i + 1]) count++ && i++;
//     result.push([count, str[i]]);
//   }
//   return result;
// }