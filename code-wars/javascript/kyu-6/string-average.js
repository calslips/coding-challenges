/*
You are given a string of numbers between 0-9. Find the average of these
numbers and return it as a floored whole number (ie: no decimal places)
written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"


Parameters: a string of space separated words,
  where each word is the spelled out representation of the numbers 0 - 9
Returns: the average of the input values spelled out in string representation
  if input string is empty or incldues num > 9, return 'n/a'
Examples:
  averageString("zero nine five two") // "four"
  averageString("four six two three") // "three"
  averageString("one two three four five") // "three"
  averageString("five four") // "four"
  averageString("zero zero zero zero zero") // "zero"
  averageString("one one eight one") // "two"
  averageString("") // "n/a"
Pseudocode:
  create a key array to hold the word representation of numbers between 0-9,
  where each is located at their respective index ('zero' at index 0)

  turn input string into an array, where each element is a single word

  initialize result variable to equal 0

  iterate over the string array to find sum of all elements
    find index of current element in key array,
      if < 0
        reassign result to 'n/a'
        and break out of loop
      otherwise
        add index to result
  if result is a number,
    return result divided by the length of string array to get average,
    round average down and replace number with word representation
  otherwise return result ('n/a')
*/

function averageString(str) {
  const key = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const strArr = str.split(' ');
  let result = 0;

  for (let i = 0; i < strArr.length; i++) {
    let index = key.indexOf(strArr[i]);
    if (index < 0) {
      result = 'n/a';
      break;
    }
    result += index;
  }
  return typeof result === 'number' ? key[Math.floor(result / strArr.length)] : result;
}