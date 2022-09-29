/*
Write Cara a function charCheck() with the arguments:

"text": a string containing Cara's answer for the question
"max": a number equal to the maximum number of characters allowed
in the answer
"spaces": a boolean which is True if spaces are included in the
character count and False if they are not
The function charCheck() should return an array: [True, "Answer"],
where "Answer" is equal to the original text, if Cara's answer is
short enough.

If her answer "text" is too long, return an array: [False, "Answer"].
The second element should be the original "text" string truncated to
the length of the limit.

When the "spaces" argument is False, you should remove the spaces
from the "Answer".

Parameters:
  a string
    text
  a number
    char limit
  a boolean
    if spaces are counted or not
Returns: an array
  1st element is a boolean
    if text is within limit
  2nd element is a string
    if 1st is true
      contains the entire text
    if 1st is false
      contain only part of text that fit in limit
Examples:
  charCheck("Cara Hertz", 10, True) // [ True, "Cara Hertz" ]
  charCheck("Cara Hertz", 9, False) // [ True, "CaraHertz" ]
  charCheck("Cara Hertz", 5, True) // [ False, "Cara " ]
  charCheck("Cara Hertz", 5, False) // [ False, "CaraH" ]
Pseudocode:
  if spaces is true
    check if length of text is less than or equal to max
      if it is
        return an array with the 1st element as true
          and the 2nd element the text as is
      if NOT
        return an array with the 1st element as false
          and the 2nd element the text cut off at the max
  if spaces is false
    remove all spaces from text
    check if spaceless text length is less than or equal to max
      if it is
        return an array with the 1st element as true
          and the 2nd element the spaceless text
      if NOT
        return an array with the 1st element as false
          and the 2nd element the spaceless text cut off at the max
*/

function charCheck(text, max, spaces) {
  return (spaces || (text = text.split(' ').join(''))) && [text.length <= max, text.slice(0, max)];
};

// function charCheck(text, max, spaces) {
//   return (spaces || (text = text.split(' ').join(''))) && text.length <= max ? [true, text] : [false, text.slice(0, max)];
// };