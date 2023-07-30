/*
You have to create a function that converts integer given as
string into ASCII uppercase letters or spaces.

All ASCII characters have their numerical order in table.

For example,
from ASCII table, character of number 65 is "A".

Numbers will be next to each other, So you have to split
given number to two digit long integers.

Examples (input -> output)
'658776' -> 'AWL'
  (because in ASCII table 'A' is 65, 'W' is 87, 'L' is 76)
'73327673756932858080698267658369' ->'I LIKE UPPERCASE'

Parameters: a str containing digits
Returns: a str of uppercase letters / spaces
Examples:
  convert("65"), "A"
  convert("656667"), "ABC"
  convert("676584"), "CAT"
  convert("73327673756932858080698267658369"), "I LIKE UPPERCASE"
Pseudocode:
  initialize an ascii var assigned to an empty str
  iterate over the input str in 2's
    convert current pair of digits to their associated ascii char
    & concat with ascii var
  return ascii var
*/

function convert(number) {
  let ascii = '';
  for (let i = 0; i < number.length; ) ascii += String.fromCharCode(number.slice(i, i += 2));
  return ascii;
}