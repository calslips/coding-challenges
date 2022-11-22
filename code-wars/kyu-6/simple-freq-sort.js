/*
In this Kata, you will sort elements in an array by
decreasing frequency of elements. If two elements have
the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
--we sort by highest frequency to lowest frequency.
If two elements have same frequency, we sort by increasing value

Parameters: an array of numbers
Returns: the array of numbers sorted by most freq to least
  (numbers of same freq sorted by increasing value)
Examples:
  solve([1,2,3,0,5,0,1,6,8,8,6,9,1]) // [1,1,1,0,0,6,6,8,8,2,3,5,9]
  solve([5,9,6,9,6,5,9,9,4,4]) // [9,9,9,9,4,4,5,5,6,6]
  solve([4,4,2,5,1,1,3,3,2,8]) // [1,1,2,2,3,3,4,4,5,8]
  solve([4,9,5,0,7,3,8,4,9,0]) // [0,0,4,4,9,9,3,5,7,8]
Pseudocode:
  initialize a count obj assigned to an empty obj
  iterate over the input array
    check if current num is a prop within count obj
      if it is
        add 1 to it
      if not
        set it to 1
  convert count obj to an array of entries
    sort entries by high freq to low freq
    if entry values are equal
      sort by ascending key
  reduce array of entries into a str
    concat accumulating str with entry key repeated, value times
  remove space from ends of reduced str
  convert reduced str into an array of str nums, split on spaces
  convert each str element within the array into a num
  return array of nums
*/

function solve(arr) {
  return Object.entries(arr.reduce((o, k) => (o[k] = (o[k] || 0) + 1) && o, {})).sort((a, b) => a[1] < b[1] ? 1 : b[1] < a[1] ? -1 : a[0] - b[0]).reduce((s, e) => s += `${e[0]} `.repeat(e[1]), '').trim().split(' ').map(n => +n);
}