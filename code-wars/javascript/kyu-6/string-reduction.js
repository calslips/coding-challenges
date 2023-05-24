/*
In this Kata, we are going to see how a Hash (or Map or dict)
can be used to keep track of characters in a string.

Consider two strings "aabcdefg" and "fbd". How many characters
do we have to remove from the first string to get the second
string? Although not the only way to solve this, we could
create a Hash of counts for each string and see which character
counts are different. That should get us close to the answer.
I will leave the rest to you.

For this example, solve("aabcdefg","fbd") = 5.
Also, solve("xyz","yxxz") = 0,
because we cannot get second string from the first since the
second string is longer.

Parameters: 2 strs
Returns: a num
  count of chars to remove from 1st str to make 2nd str
  0 if not possible
Examples:
  solve("xyz","yxz"), 0
  solve("abcxyz","ayxz"), 2
  solve("abcdexyz","yxz"), 5
  solve("axyyz","yxxz"), 0
  solve("abdegfg","ffdb"), 0
  solve("aabcdefg","fbd"), 5
  solve("aabcdefg","fdb"), 5
Pseudocode:
  if 2nd str is longer than 1st str
    return 0
  otherwise
    initialize a hash
      keys are chars of 2nd str and values are their count
    reduce 1st str to a num
      if current char is in hash
        if its value is 1
          remove it
        otherwise
          decrement its value
        return accumulating num as is
      return accumulating num incremented
    if hash is empty
      return reduced num
    otherwise
      return 0
*/

function solve(a, b) {
  if (b.length > a.length) return 0;
  const hash = [...b].reduce((o, k) => (o[k] = ++o[k] || 1, o), {}),
        removed = [...a].reduce((n, c) => (hash[c] ? hash[c] > 1 ? hash[c]-- : delete hash[c] : n++, n), 0);
  return removed * !Object.keys(hash).length;
}