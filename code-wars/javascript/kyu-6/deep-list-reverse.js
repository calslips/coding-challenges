/*
Write a function that takes an array that may have other arrays
nested indefinitely within, and reverses that array and every
array within.

Example:
//regular reverse shown only for comparison
//do NOT write a regular reverse function

var l = [[1,2],[3,4]];
l.reverse()        //produces [[3,4],[1,2]]
deepReverse(l)     //produces [[4,3],[2,1]]

var l = [[9,8,7],[6,5,4],[3,2,1]]
l.reverse()        //produces [[3,2,1],[6,5,4],[9,8,7]]
deepReverse(l)     //produces [[1,2,3],[4,5,6],[7,8,9]]

var l = [[50,51,[52,53]] , [[54,55],56,57]]
l.reverse()        //produces [[[54,55],56,57] , [[50,51,[52,53]]]
deepReverse(l)     //produces [[57,56,[55,54]] , [[53,52],51,50]]

Parameters: an array of nums / sub arrays
Returns: an array of nums / sub arrays reversed
Examples:
  deepReverse([1,2]), [2,1]
  deepReverse([[6,5],[4,3]]), [[3,4],[5,6]]
  deepReverse([[9,8,7],[6,5,4],[3,2,1]]), [[1,2,3],[4,5,6],[7,8,9]]
  deepReverse([[100,101],[102,103,104],[105,106,107],[108,109,110]]),
    [[110,109,108],[107,106,105],[104,103,102],[101,100]]
  deepReverse([[50,51,[52,53]],[[54,55],56,57]]),
    [[57,56,[55,54]],[[53,52],51,50]]
Pseudocode:
  return input array reversed and mapped
    if current value is an array
      recursively call fn with array as arg
      otherwise return value as is
*/

function deepReverse(l) {
  return l.reverse().map(e => isNaN(e) ? deepReverse(e) : e);
}