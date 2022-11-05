/*
Your job is to change the given string s using a non-negative
integer n.

Each bit in n will specify whether or not to swap the case for
each alphabetic character in s: if the bit is 1, swap the case;
if its 0, leave it as is. When you finish with the last bit of n,
start again with the first bit.

You should skip the checking of bits when a non-alphabetic
character is encountered, but they should be preserved in their
original positions.

Examples
swap("Hello world!", 11)  -->  "heLLO wORLd!"
...because 11 is 1011 in binary, so the 1st, 3rd, 4th, 5th, 7th,
8th and 9th alphabetical characters have to be swapped:

H e l l o   w o r l d !
1 0 1 1 1 x 0 1 1 1 0 x
^   ^ ^ ^    ^ ^ ^

Parameters:
  a string
  a number
Returns: a string
  convert the input num to binary
  compare binary bits to respective char
    if 0 lowercase,
    if 1 uppercase,
    if non-alphabetic leave as is
Examples:
  swap('Hello world!', 11)
    // 'heLLO wORLd!'
  swap('the quick broWn fox leapt over the fence', 9)
    // 'The QUicK BrowN foX LeaPT ovER thE FenCE'
  swap('eVerybody likes ice cReam', 85)
    // 'EVErYbODy LiKeS IcE creAM'
  swap('gOOd MOrniNg', 7864)
    // 'GooD MorNIng'
  swap('how are you today?', 12345)
    // 'HOw are yoU TOdaY?'
  swap('the lord of the rings', 0)
    // 'the lord of the rings'
  swap('', 11345)
    // ''
Pseudocode:
  initialize result var assigned to empty string
  convert input num to binary (string)
  iterate over the input string (also keep track of binary index)
    if current char upper'd does NOT equal char lower'd
      if respective bin value is 1
        invert casing
      otherwise if respective bin value is 0
        maintain casing
      increment binary index
    otherwise
      concat current char as is with result
  return result
*/

function swap(s, n) {
  let result = '', bin = n.toString(2);
  for (let i = 0, b = 0; i < s.length; i++) {
    if (s[i].toLowerCase() !== s[i].toUpperCase()) {
      +bin[b] ? result += s[i] === s[i].toUpperCase() ? s[i].toLowerCase() : s[i].toUpperCase() : result += s[i];
      b = ++b % bin.length;
    } else result += s[i];
  }
  return result;
}

// function swap(s, n) {
//   let result = '', bin = n.toString(2);
//   for (let i = 0, b = 0; i < s.length; i++) {
//     if (s[i].toLowerCase() !== s[i].toUpperCase()) {
//       if (+bin[b]) {
//         result += s[i] === s[i].toUpperCase() ? s[i].toLowerCase() : s[i].toUpperCase();
//       } else {
//         result += s[i];
//       }
//       b = ++b % bin.length;
//     } else {
//       result += s[i];
//     }
//   }
//   return result;
// }