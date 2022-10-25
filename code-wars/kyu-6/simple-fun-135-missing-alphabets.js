/*
Parameters: a string
Returns: a string
Examples:
  missingAlphabets("abcdefghijklmnopqrstuvwxy") // "z"
  missingAlphabets("abcdefghijklmnopqrstuvwxyz") // ""
  missingAlphabets("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy") // "zz"
  missingAlphabets("abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy") // "ayzz"
  missingAlphabets("codewars") // "bfghijklmnpqtuvxyz"
Pseudocode:
  initialize a count obj to contain letters of the alphabet as keys
    with the values of 0
  convert the input to an array
  iterate over the input array
    for each letter occurrence, increment count in obj
  find the max count
  reduce the keys of count obj into a string
    if value of letter is less than max
    find the difference
    and repeat the letter difference times
    concat repeat letters with accumulating string
  return reduced string
*/

function missingAlphabets(s) {
  const count = [...'abcdefghijklmnopqrstuvwxyz'].reduce((o, k) => (o[k] = 0, o), {});
  [...s].forEach(l => count[l]++);
  const max = Math.max(...Object.values(count));
  return Object.keys(count).reduce((s, k) => s += k.repeat(max - count[k]), '');
}