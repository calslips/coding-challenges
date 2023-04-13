/*
Your family runs a shop and have just brought a Scrolling Text
Machine to help get some more business.

The scroller works by replacing the current text string with a
similar text string, but with the first letter shifted to the
end; this simulates movement.

You're father is far too busy with the business to worry about
such details, so, naturally, he's making you come up with the
text strings.

Create a function named rotate() that accepts a string argument
and returns an array of strings with each letter from the input
string being rotated to the end.

Note: The original string should be included in the output array
The order matters. Each element of the output array should be the
rotated version of the previous element. The output array SHOULD
be the same length as the input string The function should return
an emptry array with a 0 length string, '', as input

Parameters: a str
Returns: an array of strs
  each char rotated to end until completing a revolution
Examples:
  rotate('Hello'), ['elloH', 'lloHe', 'loHel', 'oHell', 'Hello']
Pseudocode:
  convert input str into an array
  reduce array into an array of modified strs
    each iteration push below to accumulating array
      input str sliced from current index + 1 to end
      concatted with input str sliced from 0 to current index + 1
    return accumulating array
  return reduced array
*/

function rotate(s) {
  return [...s].reduce((r, _, i) => [...r, s.slice(++i) + s.slice(0, i)], []);
}