/*
Write a method that will search an array of strings for all strings that
contain another string, ignoring capitalization. Then return an array of
the found strings.

The method takes two parameters, the query string and the array of strings
to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method
returns an array containing a single string: "Empty" (or Nothing in Haskell,
  or "None" in Python and C)

Examples
If the string to search for is "me", and the array to search is
["home", "milk", "Mercury", "fish"], the method should return
["home", "Mercury"].


Parameters: a query string,
  an array of strings
Returns: an array of strings, each string contains the query string,
  if none do an array containing the string 'Empty'
Examples:
  wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]) // ["ab", "abc", "zab"]
  wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]) // ["ab", "abc", "zab"]
  wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]) // ["aB", "Abc", "zAB"]
  wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]) // ["Empty"]
Pseudocode:
  initialize results variable assigned to an empty array
  iterate over array of strings
    check if each element (lower cased) contains the query string (lower cased)
      if it does,
        push to results array
      if NOT
        continue with next iteration
  check if results length is 0
    if it is,
      push 'Empty' into results
  return results array
*/

function wordSearch(query, seq) {
  const results = seq.filter((e) => e.toLowerCase().includes(query.toLowerCase()));
  return results.length ? results : results.concat('Empty');
}