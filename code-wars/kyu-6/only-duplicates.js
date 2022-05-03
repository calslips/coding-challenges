/**
 * Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
 */

function onlyDuplicates(str) {
  return [...str].filter((e, _, a) => a.indexOf(e) !== a.lastIndexOf(e)).join('');
}