/*
Given: a sequence of different type of values (number, string, boolean).
You should return an object with a separate properties for each of types
presented in input. Each property should contain an array of corresponding
values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected

Parameters: an array of values of varying data types
Returns: an object,
  where each property is a data type contained in the input array,
  whose value is an array of the associated values found in the input array
Examples:
  separateTypes(['a', 1, 2, false, 'b']) // {number: [1, 2],  string: ['a', 'b'], boolean: [false]}
  separateTypes(['a', 1, 2 ]) // {number: [1, 2],  string: ['a']}
Pseudocode:
  initialize result object
  iterate over the input array
    identify the data type of each element of the array
    if that data type exists as a property in the result object
      push the element value to the associated array
    if the data type is NOT a property in the result array
      initialize the property assigned to an array containing the element value
  return result object
*/

function separateTypes(input) {
  return input.reduce((p, c) => Object.assign(p, {[typeof c]: p[typeof c] ? p[typeof c].concat(c) : [c]}), {})
}