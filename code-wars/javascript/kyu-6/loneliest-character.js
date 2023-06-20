/*
Complete the function which accepts a string and return an array of character(s)
that have the most spaces to their right and left.

Notes:
the string can have leading/trailing spaces - you should not count them
the strings contain only unique characters from a to z
the order of characters in the returned array doesn't matter

Examples
"a b  c"                        -->  ["b"]
"a bcs           d k"           -->  ["d"]
"    a b  sc     p     t   k"   -->  ["p"]
"a  b  c  de"                   -->  ["b", "c"]
"     a  b  c de        "       -->  ["b"]
"abc"                           -->  ["a", "b", "c"]

Parameters: a str
Returns: an array of strs
Examples:
  loneliest('a'), ['a']
  loneliest('abc d   ef  g   h i j      '), ['g']
  loneliest('a   b   c '), ['b']
  loneliest('  abc  d  z    f gk s '), ['z']
  loneliest('a  b  c  de  ').sort(), ['b', 'c']
  loneliest('abc').sort(), ['a', 'b', 'c']
Pseudocode:
  initialize a loners array assigned to an empty array
  initialize a max var to be 0
  initialize a chars var to be input str trimmed of spaces on ends
  iterate over chars str
  keep track of index, before (start 0), after (start 0), and current char
  after each iteration increment index, reassign current char to next char &
  reassign before to after & after to 0
    while next is a space AND NOT the end of the str
      increment after and index
    if before plus after is greater than max
      reassign max to before & after sum
      clear loners
    if before plus after is equal to max
      push current char to loners
  return loners array
*/

function loneliest(str) {
  const loners = [], chars = str.trim();
  for (let i = m = b = a = 0, c = chars[i]; i < chars.length; b = a, a = 0, c = chars[i]) {
    while (chars[++i] === ' ' && i !== chars.length) a++;
    if ((s = b + a) > m) m = s, loners.length = 0;
    if (s === m) loners.push(c);
  }
  return loners;
}