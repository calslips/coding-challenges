/*
Two strings a and b are called isomorphic if there is a one
to one mapping possible for every character of a to every
character of b. And all occurrences of every character in a
map to same character in b.

Task
In this kata you will create a function that return True if
two given strings are isomorphic to each other, and False
otherwise. Remember that order is important.

Your solution must be able to handle words with more than 10
characters.

Example

True:
CBAABC DEFFED
XXX YYY
RAMBUNCTIOUSLY THERMODYNAMICS

False:
AB CC
XXY XYY
ABAB CD

Parameters: 2 strings
Returns: a boolean
  identify whether the 2 input strings are
  isopomorphic to each other
Examples:
  isomorph("ESTATE", "DUELED"), true
  isomorph("XXX", "YYY"), true
  isomorph("SEE", "SAW"), false
  isomorph("XXY", "XYY"), false
  isomorph("abcdefghijk","abcdefghijba"), false
Pseudocode:
  initialize a hashmap to keep track of char mapping between inputs
    string 1 char to be key, string 2 char to be value
  if hashmap values are NOT unique
    return false
  iterate over string 1 converted to array of chars
    replace string 1 char with hashmap value
  convert replaced array to string
  compare replaced string with string 2
  return result of comparison
*/

function isomorph(a, b) {
  const aChars = [...a],
        hash = aChars.reduce((o, k, i) => (o[k] = b[i], o), {});
  if (Object.values(hash).some((v, i, a) => i !== a.indexOf(v))) return false;
  return aChars.map(c => hash[c]).join('') === b;
}