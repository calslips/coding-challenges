/*
Complete the solution so that it strips all text that follows any of a
set of comment markers passed in. Any whitespace at the end of the line
should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result =
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

Parameters:
  a string
  an array of strings
Returns:
  the input string after removing parts of each line
  that follows a marker (trailing whitespace too)
Examples:
  solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])
    // "apples, plums\npears\noranges"
  solution("Q @b\nu\ne -e f g", ["@", "-"])
    // "Q\nu\ne"
Pseudocode:
  convert input into an array of lines
  iterate over lines array (map)
    iterate over markers array (reduce, start with line length)
      if current line contains marker AND its index is < previous
        return lower index
      otherwise
        return previous
    return line sliced from start to reduce result AND trim whitespace
  return lines array joined on new line character
*/

function solution(input, markers) {
  return input.split('\n').map(l => l.slice(0, markers.reduce((i, m) => (j = l.indexOf(m)) > -1 && j < i ? j : i, l.length)).trim()).join('\n');
};

// function solution(input, markers) {
//   return input
//     .split('\n')
//     .map(l => {
//       const markerIndex = markers.reduce((i, m) => {
//         return (j = l.indexOf(m)) > -1 && j < i ? j : i;
//       }, l.length);
//       return l.slice(0, markerIndex).trim();
//     })
//     .join('\n');
// };