/*
Given an integer n and two other values, build an array of
size n filled with these two values alternating.

Parameters:
  a num
  a value (of any data type?)
  a value (of any data type?)
Returns: an array
  containing the 2 input values alternating
Examples:
  alternate(5, true, false), [true, false, true, false, true]
  alternate(20, 'blue', 'red'),
    [
      'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue',
      'red', 'blue', 'red', 'blue', 'red', 'blue', 'red',
      'blue', 'red', 'blue', 'red', 'blue', 'red'
    ]
  alternate(0, "lemons", "apples"), []
Pseudocode:
  separate the num from the other two values (rest)
  initialize a results var assigned to an empty arr
  initialize a loop to run as long as results length is less than n
    when results length is odd,
      push value at index 1 to results
    when results length is even,
      push value at index 0 to results
  return results
*/

function alternate(n, ...values) {
  const results = [];
  while (results.length < n) results.push(values[results.length % 2]);
  return results;
}

function alternate(n, ...values) {
  const results = [];
  while (results.length < n) results.length % 2 ? results.push(values[1]) : results.push(values[0]);
  return results;
}