/*
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
  should be converted into
[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

Note: The output array should be sorted alphabetically by key name.

Parameters: an obj
Returns: a 2d array
  each subarray is a tuple of key/value pairs
  sorted alphabetically by key
Examples:
  convertHashToArray({name: "Jeremy"}), [["name", "Jeremy"]]
  convertHashToArray({name: "Jeremy", age: 24}), [["age", 24], ["name", "Jeremy"]]
  convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}), [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
  convertHashToArray({product: "CodeWars", powerLevelOver: 9000}), [["powerLevelOver", 9000], ["product", "CodeWars"]]
  convertHashToArray({}),[]
Pseudocode:
  convert input obj into an array of entries
  sort entries by 0th index item alphabetically
  return sorted entries array
*/

function convertHashToArray(hash) {
  return Object.entries(hash).sort((a, b) => a[0].localeCompare(b[0]));
}