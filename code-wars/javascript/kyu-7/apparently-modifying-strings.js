/*
For every string, after every occurrence of 'and' and/or 'but', insert
the substring 'apparently' directly after the occurrence(s).

If input does not contain 'and' or 'but', return the same string. If a
blank string, return ''.

If substring 'apparently' is already directly after an 'and' and/or 'but',
do not add another. (Do not add duplicates).

Examples:
Input 1
'It was great and I've never been on live television before but sometimes
  I don't watch this.'

Output 1
'It was great and apparently I've never been on live television before but
  apparently sometimes I don't watch this.'

Input 2
'but apparently'

Output 2
'but apparently'

(no changes because 'apparently' is already directly after 'but' and there
should not be a duplicate.)

An occurrence of 'and' and/or 'but' only counts when it is at least one
space separated. For example 'andd' and 'bbut' do not count as occurrences,
whereas 'b but' and 'and d' does count.

Parameters: a string
  a sentence containing space-separated words
Returns: a string
  any occurrences of and OR but followed by
    'apparently' if not already
  if no and or but
    return string as is
  if arg is an empty string
    return the same
Examples:
  apparently('It was great and I have never been on live television before but sometimes I dont watch this.')
    // 'It was great and apparently I have never been on live television before but apparently sometimes I dont watch this.'
  apparently('and') // 'and apparently'
  apparently('apparently') // 'apparently'
Pseudocode:
  convert input string into an array of words
  iterate over the words array
    if current word is and OR but
      check if next element is 'apparently'
        if it is
          continue
        if not
          insert 'apparently'
  join array of words on space
  return joined string
*/

function apparently(string) {
  return string.split(' ').map((w, i, a) => (w === 'and' || w === 'but') && a[i + 1] !== 'apparently' ? w += ' apparently' : w).join(' ');
}