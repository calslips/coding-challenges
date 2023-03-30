/*
Given an array of 2k integers (for some integer k), perform the
following operations until the array contains only one element:

On the 1st, 3rd, 5th, etc.
iterations (1-based) replace each pair of consecutive elements
with their sum;
On the 2nd, 4th, 6th, etc.
iterations replace each pair of consecutive elements with their
product.
After the algorithm has finished, there will be a single element
left in the array. Return that element.

Example
For inputArray = [1, 2, 3, 4, 5, 6, 7, 8],
the output should be 186.
[1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186]

Input/Output
[input] integer array arr
  Constraints: 21 ≤ arr.length ≤ 25, -9 ≤ arr[i] ≤ 99.
[output] an integer

Parameters: an array of nums
Returns: a num
Examples:
  arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]), 186
  arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 64
  arrayConversion([3, 3, 5, 5]), 60
Pseudocode:
  initialize a result var assigned to a copy of arr
  create a loop to run as long as result has a length greater than 1
  set counter to 1
  increment counter by 1
    initialize a temp var assigned to an empty array
    if counter is odd
      iterate over result (skipping els by 2)
        add current and next values (lengths always power of 2, even)
        push sum to temp
    otherwise if counter is even
      iterate over result (skipping els by 2)
        multiply current and next values (lengths always power of 2, even)
        push product to temp
    reassign result to equal temp
  return solo el in result array
*/

function arrayConversion(arr) {
  let res = [...arr];
  for (let i = 1, t = []; res.length > 1; i++, res = t, t = [])
    for (let j = 0; j < res.length; j++) t.push(i % 2 ? res[j] + res[++j] : res[j] * res[++j]);
  return res[0];
}

function arrayConversion(arr) {
  let res = [...arr];
  for (let i = 1; res.length > 1; i++) {
    const temp = [];
    if (i % 2) {for (let j = 0; j < res.length; j++) temp.push(res[j] + res[++j])}
    else {for (let j = 0; j < res.length; j++) temp.push(res[j] * res[++j])}
    res = temp;
  }
  return res[0];
}

const arrayConversion = arr => {
  let res = [...arr];
  for (let i = 1; res.length > 1; i++) {
    const temp = [];
    for (let j = 0; j < res.length; j++) temp.push((i % 2 ? add : multiply)(res[j], res[++j]));
    res = temp;
  }
  return res[0];
}
const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;