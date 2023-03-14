/*
Your job is to build a function which determines whether or not
there are double characters in a string (including whitespace
  characters). For example aa, !! or   .

You want the function to return true if the string contains
double characters and false if not. The test should not be case
sensitive; for example both aa & aA return true.

Parameters: a str
Returns: a boolean
  whether the input str contains a double char
  (side by side, case insensitive)
Examples:
  doubleCheck("abca"), false
  doubleCheck("aabc"), true
  doubleCheck("a 11 c d"), true
  doubleCheck("AabBcC"), true
  doubleCheck("a b  c"), true
  doubleCheck("a b c d e f g h i h k"), false
Pseudocode:
  convert all chars of input str to the same case
  iterate over the chars of the str
    if current char ever equals next char
      return true
  return false
*/

function doubleCheck(str) {
  return [...str.toLowerCase()].some((e, i, a) => e === a[++i]);
}

function doubleCheck(str) {
  return !![...str.toLowerCase()].filter((e, i, a) => e === a[++i]).length;
}

function doubleCheck(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) if (str[i] === str[i + 1]) return true;
  return false;
}