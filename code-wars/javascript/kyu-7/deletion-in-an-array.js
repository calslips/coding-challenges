/*
The deleteValues function takes an array and removes elements
that answer true to the pred function.

For some reason, some of the elements of the array for which
the predicate holds are not deleted...

Can you fix the code?

Parameters:
  an array
  a fn
Returns: an array
  values that return true when passed into pred fn are removed
Examples:
  deleteValues([1, 2, 3, 4], isOdd), [2, 4];
  deleteValues([1, 2, 3, 4], isEven), [1, 3];
Pseudocode:
  original did not account for shift in values after el removal
  refactored to decrement index when el is removed
*/

function deleteValues(array, pred) {
  for (let i = 0; i < array.length; i++) if (pred(array[i])) array.splice(i--, 1);
  return array;
}