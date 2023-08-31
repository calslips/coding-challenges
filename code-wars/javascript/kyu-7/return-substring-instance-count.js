/*
Complete the solution so that it returns the number of times
the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb')
  # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb')
  # should return 1

Overlap is not permitted:
  "aaa" contains 1 instance of "aa", not 2.

Parameters: 2 strs
Returns: a num
Examples:
  solution('abcdeb','b'), 2
  solution('abc','b'), 1
  solution('abbc','bb'), 1
Pseudocode:
  split 1st input str on 2nd input str
  return length of split - 1
*/

function solution(fullText, searchText) {
  return --fullText.split(searchText).length;
}