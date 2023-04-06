/*
Oh thank goodness you're here! The last intern has completely
ruined everything!
All of our customer's phone numbers have been scrambled, and we
need those phone numbers to annoy them with endless sales calls!

The Format
Phone numbers are stored as strings and comprise 11 digits,
eg '02078834982' and must always start with a 0.

However, something strange has happened and now all of the phone
numbers contain lots of random characters, whitespace and some
are not phone numbers at all!

For example,
'02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!'
and there are lots more lines that we need to check.

The Task
Given a string, you must decide whether or not it contains a
valid phone number. If it does, return the corrected phone number
as a string ie. '02078834982' with no whitespace or special
characters, else return "Not a phone number".

Parameters: a str
Returns: a str
  phone number str if value
  'Not a phone number' str if invalid
Examples:
  isItANum("S:)0207ERGQREG88349F82!efRF)"), "02078834982"
  isItANum("sjfniebienvr12312312312ehfWh"), "Not a phone number"
  isItANum("0192387415456"), "Not a phone number"
  isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"), "02084564165"
  isItANum("stop calling me no I have never been in an accident"), "Not a phone number"
Pseudocode:
  initialize a result var assigned to an empty str
  iterate over the chars of input str
    if current char is a num
      concat it with result
  if result starts with 0 and has a length of 11
    return result
  otherwise
    return 'Not a phone number'
*/

function isItANum(str) {
  const num = [...str].reduce((s, c) => isNaN(parseInt(c)) ? s : s + c, '');
  return num.startsWith(0) && num.length === 11 ? num : 'Not a phone number';
}