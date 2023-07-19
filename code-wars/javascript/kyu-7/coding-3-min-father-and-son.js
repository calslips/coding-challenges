/*
Every uppercase letter is Father,
The corresponding lowercase letters is the Son.

Give you a string s,
If the father and son both exist, keep them.
If it is a separate existence, delete them. Return the result.

For example:

sc("Aab") should return "Aa"

sc("AabBc") should return "AabB"

sc("AaaaAaab") should return "AaaaAaa"
  (father can have a lot of son)

sc("aAAAaAAb") should return "aAAAaAA"
  (son also can have a lot of father ;-)

Parameters: a str
Returns: a str
Examples:
  sc("Aab"), "Aa"
  sc("AabBc"), "AabB"
  sc("AaaaAaab"), "AaaaAaa"
  sc("aAAAaAAb"), "aAAAaAA"
  sc("SONson"), "SONson"
  sc("FfAaTtHhEeRr"), "FfAaTtHhEeRr"
  sc("SONsonfather"), "SONson"
  sc("sonfather"), ""
  sc("DONKEYmonkey"), "ONKEYonkey"
  sc("monkeyDONKEY"), "onkeyONKEY"
  sc("BANAna"), "ANAna"
Pseudocode:
  initialize father son var to contain an empty str
  iterate over the chars of input str
    if input str contains BOTH upper & lowercase forms of current char
      concat current char with father son var
  return father son var
*/

function sc(s) {
  let fs = '';
  for (const char of s) {
    if (s.includes(char.toLowerCase()) && s.includes(char.toUpperCase())) fs += char;
  }
  return fs;
}

function sc(s) {
  return [...s].reduce((r, c) => s.includes(c.toUpperCase()) && s.includes(c.toLowerCase()) ? r + c : r, '');
}