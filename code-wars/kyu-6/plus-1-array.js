/*
Given an array of integers of any length,
return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239,
adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]

Parameters: an array of numbers
  (never empty, only non-negative single digit ints)
Returns:
  the input array after adding 1 to the number within
  (the elements are being treated as one long number,
  adding 1 to it will be just like adding 1 to a
  regular number, just with its digits comma-separated)
Examples:
  upArray([2,3,9]) // [2,4,0]
  upArray([4,3,2,5]) // [4,3,2,6]
  upArray([1,-9]) // null
Pseudocode:
  if array is empty OR any elements are less than 0 OR greater than 9
    return null
  iterate over the array from end to start
    add 1 to current number
      if it's > 9
        set current number to 0
        if it is the first element
          insert a new element (1) into the front of the array
        continue to next iteration
      otherwise
        break
  return modified input array
*/

function upArray(arr){
  if (!arr.length || arr.find(n => n < 0 || n > 9)) return null;
  for (let i = arr.length - 1; i >= 0; i--) {
    if ((arr[i] += 1) > 9) arr[i] = 0, !i && arr.unshift(1);
    else break;
  }
  return arr;
}

// fail, would need to refactor to make it work
//   if (arr.find(n => n < 0 || n > 9) || !arr.length) return null;
//   return BigInt(parseInt(arr.join('')) + 1).toString().split('').map(n => +n);