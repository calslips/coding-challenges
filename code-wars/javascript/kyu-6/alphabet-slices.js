/*
Given a string of lowercase letters, find substrings that are
found in the alphabet and reverse the substrings, while
maintaining their position within the string. Return the string
with alphabet substrings reversed.

Here a substring of the alphabet is a substring of lowercase
letters in alphabetic order.

examples:

("xabc")=> "xcba"

xa is not found in the alphabet, but abc is found,
so it is reversed.

("abcxdef")=> "cbaxfed"

("abcxyz")=> "cbazyx"

("abccdefg")=> "cbagfedc"

("vvmnozzabcbb")=> "vvonmzzcbabb"

Note: if there are no alphabet substrings in the input string,
return the input string as is.

All inputs will consist of one or more lowercase letters.
This kata uses only lowercase strings.

Parameters: a str
Returns: a str
Examples:
  solution("xabc"), "xcba"
  solution("abcxdef"), "cbaxfed"
  solution("abcxyz"), "cbazyx"
  solution("zahimzmstaz"), "zaihmzmtsaz"
  solution("jjjjjjjjklmnopqrstuv"), "jjjjjjjvutsrqponmlkj"
  solution("zyx"), "zyx"
  solution("ppqqrr"), "pqprqr"
  solution("gjaababbboo"), "gjabababboo"
Pseudocode:
  initialize var to contain all letters of the alphabet
  initialize new str assigned to an empty str
  create a loop to run over the input str
  keep track of start index, end index, and substr
  increment end by 1 each iteration
    if current substr concatted with letter at end index is NOT in alphabet
      if substr is more than 1 letter long
        concat new str with substr reversed
      otherwise
        concat new str with letter at start index
      reassign start to equal end
      reassign substr to equal an empty str
    concat substr with letter at end index
  return new str
*/

function solution(str) {
  let newStr = '';
  for (let start = 0, end = 0, sub = ''; end <= str.length; end++) {
    if (end && str.charCodeAt(end) - str.charCodeAt(end - 1) !== 1) {
      if (sub.length > 1) newStr += [...sub].reverse().join('');
      else newStr += str[start];
      start = end;
      sub = '';
    }
    sub += str[end];
  }
  return newStr;
}

function solution(str) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newStr = '';
  for (let start = 0, end = 0, sub = ''; end <= str.length; end++) {
    if (!alphabet.includes(sub + str[end])) {
      if (sub.length > 1) newStr += [...sub].reverse().join('');
      else newStr += str[start];
      start = end;
      sub = '';
    }
    sub += str[end];
  }
  return newStr;
}