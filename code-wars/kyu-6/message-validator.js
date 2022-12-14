/*
In this kata, you have an input string and you should check
whether it is a valid message. To decide that, you need to
split the string by the numbers, and then compare the numbers
with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into
  3, hey, 5, hello, 2, hi and the function should return true,
  because "hey" is 3 characters, "hello" is 5, and "hi" is 2;
  as the numbers and the character counts match,
  the result is true.

Notes:
Messages are composed of only letters and digits
Numbers may have multiple digits:
  e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following
substring, otherwise the message is invalid:
  e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true

Parameters: a str
Returns: a boolean
  (where each num pairs with the word that follows,
  and is equal to its char count)
Examples:
  isAValidMessage("3hey5hello2hi"), true
  isAValidMessage("4code13hellocodewars"), true
  isAValidMessage("3hey5hello2hi5"), false
  isAValidMessage("code4hello5"), false
  isAValidMessage("1a2bb3ccc4dddd5eeeee"), true
  isAValidMessage(""), true
Pseudocode:
  initialize a results var assigned to an empty arr
  iterate over the input str
    if current char and last el in results CAN
    convert to the same type
      concat results at last el with current char
    otherwise
      push current char to results arr
  iterate over results arr (every even index, skip odds)
    if current num does NOT equal the length of the next el
      return false
  return true
*/

function isAValidMessage(message) {
  const results = [];
  for (const char of message) {
    if (isNaN(char) === isNaN(results[results.length - 1])) results[results.length - 1] += char;
    else results.push(char);
  }
  for (let i = 0; i < results.length; i += 2) if (+results[i] !== results[i + 1]?.length) return false;
  return true;
}