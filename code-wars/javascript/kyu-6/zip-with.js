/*
zipWith takes a function and two arrays and zips the arrays together,
applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long
as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Input validation
Assume all input is valid.

Parameters:
  a function (gets applied to corresponding array values)
  2 arrays
Returns:
  1 array (result of applying fn to respective values)
Examples:
  zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )
    // [1,10,100,1000]
  zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )
    // [4,7,7,4,7,7]
  zipWith( function(a,b) { return a+b; }
    // [0,1,2,3], [0,1,2,3] ), [0,2,4,6]
  zipWith( (a,b) => a+b, [0,1,2,3], [0,1,2,3] )
    // [0,2,4,6]
Pseudocode:
  initialize a result variable to equal an empty array
  check if array 1 is longer than array 2
    if so, get array 1 length to equal array 2 length
  otherwise check if array 2 is longer than array 1
    if so, get array 2 length to equal array 1 length
  iterate over array 1
    take element from array 1 and array 2 at current index,
    pass into function argument
    push the return of the function to result array
  return result array
*/

function zipWith(fn, a0, a1) {
  return a0.length > a1.length ? a0 = a0.slice(0, a1.length) : a1 = a1.slice(0, a0.length), a0.map((e, i) => fn(e, a1[i]));
}

// function zipWith(fn, a0, a1) {
//   a0.length > a1.length ? a0 = a0.slice(0, a1.length) : a1 = a1.slice(0, a0.length);
//   return a0.map((e, i) => fn(e, a1[i]));
// }