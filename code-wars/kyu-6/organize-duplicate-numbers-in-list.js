/*
Sam is an avid collector of numbers. Every time he finds a new
number he throws it on the top of his number-pile. Help Sam
organise his collection so he can take it to the International
Number Collectors Conference in Cologne.

Given an array of numbers, your function should return an array
of arrays, where each subarray contains all the duplicates of a
particular number. Subarrays should be in the same order as the
first occurence of the number they contain:

group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]
Assume the input is always going to be an array of numbers. If
the input is an empty array, an empty array should be returned.

Parameters: an array of numbers
Returns: an array of arrays
  each sub array contains all duplicates of that number
  in the same order of appearance as the input array
Examples:
  group([3, 2, 6, 2, 1, 3]) // [[3, 3], [2, 2], [6], [1]]
  group([3, 2, 6, 2]) // [[3], [2, 2], [6]]
Pseudocode:
  initialize a result variable, assigned to an empty array
  initialize a sub array variable, assigned to an empty array
  iterate over the input array, while it has a length
    take current element and push to sub array
    remove current element from input array
    while there are more occurrences of the element in input array
      remove it from the input array and place it into sub array
    push sub array to result array
    reassign sub array to equal an empty array
  return result array
*/

function group(arr) {
  let result = [], sub = [];
  while (arr.length) {
    sub.push(arr.shift());
    while ((i = arr.indexOf(sub[0])) >= 0) {
      sub.push(...arr.splice(i, 1));
    }
    result.push(sub);
    sub = [];
  }
  return result;
}