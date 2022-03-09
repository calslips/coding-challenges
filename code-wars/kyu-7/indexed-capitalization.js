/*
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.


Parameters: a string and an array of numbers
Returns: return string, capitalizing letters at the indexes found in array arg
Examples:
  capitalize("codewars",[1,3,5,50]) // "cOdEwArs"
  capitalize("abracadabra",[2,6,9,10]) // "abRacaDabRA"
  capitalize("codewarriors",[5]) // 'codewArriors'
Pseudocode:
  spread string into array where each element is a letter
  iterate over strArray
    if current index is included in input array of nums
      uppercase current letter
    otherwise
      keep character the same
  join array into a string
  return new string
*/

function capitalize(s,arr) {
  return [...s].map((l, i) => arr.includes(i) ? l.toUpperCase() : l).join('');
}