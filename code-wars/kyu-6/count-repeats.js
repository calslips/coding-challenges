/**
 * Write a function that returns the count of characters that have to be
 * removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1
 */

function countRepeats(str) {
  return [...str].reduce((p, c, i) => c === str[i + 1] ? ++p : p, 0);
}