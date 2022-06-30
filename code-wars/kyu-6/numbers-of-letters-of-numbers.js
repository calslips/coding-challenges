/*
If we write out the digits of "60" as English words we get "sixzero"; the
number of letters in "sixzero" is seven. The number of letters in "seven"
is five. The number of letters in "five" is four. The number of letters in
"four" is four: we have reached a stable equilibrium.

Note: for integers larger than 9, write out the names of each digit in a
single word (instead of the proper name of the number in English). For example,
write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of
  nine hundred and ninety-nine).

For any integer between 0 and 999, return an array showing the path from that
integer to a stable equilibrium:

Examples
numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
numbersOfLetters(1) --> ["one", "three", "five", "four"]

Parameters: an integer
Returns: an array of strings
  1st element is the string representation of the input integer
  the remaining elements are the string representation of the previous element's length
  four triggers the function return
Examples:
  numbersOfLetters(1) // ["one", "three", "five", "four"]
  numbersOfLetters(12) // ["onetwo", "six", "three", "five", "four"]
  numbersOfLetters(37) // ["threeseven", "onezero", "seven", "five", "four"]
  numbersOfLetters(311) // ["threeoneone", "oneone", "six", "three", "five", "four"]
  numbersOfLetters(999) // ["nineninenine", "onetwo", "six", "three", "five", "four"]
Pseudocode:
  initialize an empty result array
  create a key array where each element is the string representation of its index
  convert input integer into string
  split string into an array of individual digits
  iterate over the array of string digits
    access the value of the elment in key array located at the index that equals the current digit
    concatenate the current value with the previous value
  push the concatenated string into result array
  create a loop that runs as long as the last element in the result array doesn't equal 'four'
    access the last element in the result array
    obtain its length
    access the value of the element in the key array located at the index that equals the length of the last element
    push key value to the result array
  return result array
Corrected pseudocode:
  initialize an empty result array
  create a key array where each element in the string representation of its index (from 0-9)
  create a loop that runs as long as the last element in the result array does NOT equal 'four'
    if the result array is empty OR the length of the last element is greater than 9
      convert the integer OR the last result element's length into a string
      split string into an array of digits (each digit is one element)
      convert each digit to its string representation using the key
      concat these string representations together
      push complete concatted string to result
    otherwise
      get the last element in the result arrays length
      convert the length to its string representation using the key
      push this string representation to the results array
  return the result array once the loop terminates
    (when the previous elements length is 4 / 'four' is included in the result array)
*/

function numbersOfLetters(integer) {
  const result = [];
  const key = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  while ((last = result[result.length - 1]) !== 'four') {
    result.push(`${result.length ? last.length : integer}`.split('').reduce((a, c) => a += key[c], ''));
  }
  return result;
}

// function numbersOfLetters(integer) {
//   const result = [];
//   const key = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//   while ((last = result[result.length - 1]) !== 'four') {
//     if (!result.length || last.length > 9) {
//       result.push(`${result.length ? last.length : integer}`.split('').reduce((a, c) => a += key[c], ''));
//     } else {
//       result.push(key[last.length]);
//     }
//   }
//   return result;
// }

// function numbersOfLetters(integer) {
//   const result = [];
//   const key = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//   while (result[result.length - 1] !== 'four') {
//     if (!result.length || result[result.length - 1].length > 9) {
//       result.push(`${result.length ? result[result.length - 1].length : integer}`.split('').reduce((a, c) => a += key[c], ''));
//     } else {
//       result.push(key[result[result.length - 1].length])
//     }
//   }
//   return result;
// }