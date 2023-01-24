/*
Truncate the given string (first argument) if it is longer than
the given maximum length (second argument). Return the truncated
string with a "..." ending.

Note that inserting the three dots to the end will add to the
string length.

However, if the given maximum string length num is less than or
equal to 3, then the addition of the three dots does not add to
the string length in determining the truncated string.

Examples
('codewars', 9)  ==>  'codewars'
('codewars', 7)  ==>  'code...'
('codewars', 2)  ==>  'co...'

Parameters:
  a str
  a num
Returns: a str
  snippet of input str to be the length of input num
  with ellipse taking up the last 3 spaces
  unless input num is less than or equal to 3,
  then just concat ellipse on top of snippet
Examples:
  truncateString('chingel', 8), 'chingel'
  truncateString('chingel', 6), 'chi...'
  truncateString('chingel', 2), 'ch...'
  truncateString('pippi', 3), 'pip...'
  truncateString('Peter Piper picked a peck of pickled peppers', 14), 'Peter Piper...'
  truncateString('A-tisket a-tasket A green and yellow basket', 11), 'A-tisket...'
  truncateString('A-tisket a-tasket A green and yellow basket', 43), 'A-tisket a-tasket A green and yellow basket'
  truncateString('A-tisket a-tasket A green and yellow basket', 45), 'A-tisket a-tasket A green and yellow basket'
  truncateString('A-tisket a-tasket A green and yellow basket', 1), 'A...'
  truncateString('Absolutely Longer', 2), 'Ab...'
  truncateString('Chingel loves his Angel so much!', 27), 'Chingel loves his Angel ...'
  truncateString('I like ice-cream. Do you?', 19), 'I like ice-cream...'
  truncateString('Seems like you have passed the final test. Congratulations!', 53), 'Seems like you have passed the final test. Congrat...'
Pseudocode:
  if str length is greater than input num
    if input num is greater than 3
      return input str sliced from 0 to num minus 3 concatted with ellipse
    otherwise
      return input str sliced from 0 to num concatted with ellipse
  otherwise
    return str as is
*/

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
}