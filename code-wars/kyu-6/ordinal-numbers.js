/*
Ordinal numbers are used to tell the position of something in a list.
Unlike regular numbers, they have a special suffix added to the end of them.

Task
Your task is to write the ordinal(number, brief) function. number will be
an integer. You need to find the ordinal suffix of said number.
brief is an optional parameter and defaults to false. When using brief notation,
nd and rd use d instead. All others are the same.
ordinal(number, brief) should return a string containing those two characters
(or one character) that would be tagged onto the end of the number.
The last two digits determine the ordinal suffix.

Notation for general notation
0  1  2  3  4  5  6  7  8  9
th st nd rd th th th th th th

Notation for brief notation
0  1  2  3  4  5  6  7  8  9
th st d  d th th th th th th

However, when the last two digits of the number are 11, 12, or 13, th is
used instead of st,nd,rd respectively.

Examples

*General
1 - 1st
2 - 2nd
3 - 3rd
5 - 5th
11- 11th
149 - 149th
903 - 903rd

*Brief
1 - 1st
2 - 2d
3 - 3d
5 - 5th
11- 11th
149 - 149th
903 - 903d

Notes
Numbers might be passed in replacement of booleans, so false may be passed
in as 0 and true may be passed in as 1.

Parameters: a number and a boolean (default to false, can also be either 0 or 1)
Returns: str representing the input numbers ordinal suffix
  (if brief is true or 1, suffixes that are nd or rd become d.
  if brief is false or 0, maintain original suffix format)
Examples:
  ordinal(1) // "st"
  ordinal(11) // "th"
  ordinal(111) // "th"
  ordinal(121) // "st"
  ordinal(20) // "th"
  ordinal(52) // "nd"
  ordinal(903, true) // "d"
Pseudocode:
  check if number ends with 1, but NOT 11
    return 'st'
  check if number ends with 2, but not 12
    if brief return 'd'
    otherwise return 'nd'
  check if number ends with 3, but not 13
    if brief return 'd'
    otherwise return 'rd
  if any other number'
    return 'th'
*/

function ordinal(number, brief = 0) {
  if (number % 10 === 1 && number % 100 !== 11) return 'st';
  if (number % 10 === 2 && number % 100 !== 12) return brief ? 'd' : 'nd';
  if (number % 10 === 3 && number % 100 !== 13) return brief ? 'd' : 'rd';
  return 'th';
}