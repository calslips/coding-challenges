/*
Create a function called one that accepts two params:
a sequence
a function
and returns true only if the function in the params returns true for exactly
one (1) item in the sequence.

Parameters:
  an array
  a callback function
Returns:
  true if the callback fn returns true for exactly 1 element of input array
Examples:
  one([1,2,3,4,5], function(item){ return item<2}) // true
  one([1,2,3,4,5], function(item){ return item%2 }) // false
    ("more than 1 item are odd")
  one([1,2,3,4,5], function(item){ return item>5 }) // false
    ("none item is greater than 5")
  one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) // true
  one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) // false
  one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) // false
Pseudocode:
  call filter on input array
    pass callback fn to filter
  check if length of filter equals 1
    return true
  otherwise
    return false
*/

function one(arr, fun){
  return arr.filter(fun).length === 1;
}