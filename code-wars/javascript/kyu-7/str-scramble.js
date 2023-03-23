/*
Given a string and an array of index numbers, return the
characters of the string rearranged to be in the order
specified by the accompanying array.

Ex:
scramble('abcd', [0,3,1,2]) -> 'acdb'

The string that you will be returning back will have:
'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2,
because the order of those characters maps to their
corresponding numbers in the index array.

In other words, put the first character in the string at the
index described by the first element of the array

You can assume that you will be given a string and array of
equal length and both containing valid characters
(A-Z, a-z, or 0-9).

Parameters:
  a str
  an arr of nums
Returns: a str
  chars moved to the corresponding
  indices found in arr
Examples:
  scramble('abcd', [0,3,1,2]), 'acdb'
  scramble('sc301s', [4,0,3,1,5,2]), 'c0s3s1'
  scramble('bskl5', [2,1,4,3,0]), '5sblk'
Pseudocode:
  initialize a result var assigned to an empty arr
  iterate over the input str
    assign current char to result arr
    at the corresponding index found in input arr
  return result arr joined into a str (on empty space)
*/

function scramble(str, arr) {
  return [...str].reduce((r, c, i) => (r[arr[i]] = c, r), []).join('');
};