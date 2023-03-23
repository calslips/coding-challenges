/*
You have a two-dimensional list in the following format:
data = [[2, 5], [3, 4], [8, 7]]

Each sub-list contains two items, and each item in the sub-lists is an integer.
Write a function process_data()/processData() that processes each sub-list like so:
[2, 5] --> 2 - 5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8 - 7 --> 1
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

For input, you can trust that neither the main list nor the sublists will be empty.

Parameters: an array of arrays (nested arrays contain 2 values)
Returns: a single number value
  (the product of each element after subtracting the values in the subarray)
Examples:
  processData([[2, 5], [3, 4], [8, 7]]) // 3
  processData([[2, 9], [2, 4], [7, 5]]) // 28
Pseudocode:
  initialize a product variable assigned to 1
  iterate over each element of the array
    replace the nested array with the difference of value1 and value2
    reassign product to equal itself multiplied by the difference
  return the product
*/

function processData(data) {
  return data.map(e => e[0] - e[1]).reduce((p, c) => p * c);
}