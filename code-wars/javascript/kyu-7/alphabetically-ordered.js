/*
Your task is very simple. Just write a function that takes an
input string of lowercase letters and returns true/false
depending on whether the string is in alphabetical order or not.

Examples (input -> output)
"kata" -> false ('a' comes after 'k')
"ant" -> true (all characters are in alphabetical order)

Parameters: a str (lowercase)
Returns: a boolean
  whether chars appear in alphabetical order
Examples:
  alphabetic("asd"), false
  alphabetic("codewars"), false
  alphabetic("door"), true
  alphabetic("cell"), true
  alphabetic("z"), true
  alphabetic(""), true
Pseudocode:
  iterate over the chars of the input str
    if the next char has a charcode less than current char
      return false
  return true
*/

function alphabetic(s) {
  for (let i = 0; i < s.length - 1; i++) if (s[i] > s[i + 1]) return false;
  return true;
}