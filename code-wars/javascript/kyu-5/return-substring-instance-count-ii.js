/*
Complete the solution so that it returns the number of times the
search_text is found within the full_text.

searchSubstr( fullText, searchText, allowOverlap = true )

so that overlapping solutions are (not) counted.
If the searchText is empty, it should return 0.
Usage examples:

searchSubstr('aa_bb_cc_dd_bb_e', 'bb')
  // should return 2 since bb shows up twice
searchSubstr('aaabbbcccc', 'bbb')
  // should return 1
searchSubstr( 'aaa', 'aa' )
  // should return 2
searchSubstr( 'aaa', '' )
  // should return 0
searchSubstr( 'aaa', 'aa', false )
  // should return 1

Parameters:
  a str
  a str
  an optional boolean
Returns:
  a num
Examples:
  searchSubstr('aa_bb_cc_dd_bb_e', 'bb'), 2
  searchSubstr('aaabbbcccc', 'bbb'), 1
  searchSubstr('aaa', 'aa'), 2
  searchSubstr('aaa', ''), 0
  searchSubstr('aaa', 'aa', false), 1
Pseudocode:
  if there is no searchText
    return 0
  if overlap is true
    initialize count var assigned to 0
    create a loop to iterate over fullText
    keep track of index of searchText
    (keep iterating as long as index is greater than or equal to 0)
      increment count
    return count
  otherwise
    split fullText on seatchText
    return split length - 1
*/

function searchSubstr(fullText, searchText, allowOverlap = true) {
  if (!searchText) return 0;
  if (allowOverlap) {
    let count = 0;
    for (let i = fullText.indexOf(searchText); i >= 0; i = fullText.indexOf(searchText, ++i)) count++;
    return count;
  }
  return --fullText.split(searchText).length;
}