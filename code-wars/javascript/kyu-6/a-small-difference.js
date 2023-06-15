/*
Write a function that given two strings determines if they differ by exactly
one character.

The difference may consist of one charater being added, removed or replaced,
in which case the function must return true.
In all other cases it must return false.

Examples:
tower / towe -> true
tower / towner -> true
tower / bower -> true
tower / token -> false
tower / tower -> false

Parameters: 2 strs
Returns: a boolean
  true if input strs are off by 1
  false otherwise
Examples:
  oneCharDifference('grant', 'gant'), true
  oneCharDifference('grant', 'granty'), true
  oneCharDifference('grant', 'grent'), true
  oneCharDifference('grant', 'grannt'), true
  oneCharDifference('grant', 'grant'), false
  oneCharDifference('grant', 'grrrant'), false
  oneCharDifference('grant', 'gren'), false
  oneCharDifference('grantoo', 'grant'), false
Pseudocode:
  if strs are equal or if length difference is greater than 1
    return false
  differentiate b/w longer and shorter strs (if able)
  iterate over the shorter string
  initialize off by one flag as false
  keep track of separate indices for short and long
  increment both indices by 1 each iteration
    if char at current indices for short and long are NOT equal
      if off by one flag is true
        return false
      if short is actually shorter than long
        decrement short index
      otherwise
        set off by one flag to true
  return true
*/

function oneCharDifference(s1, s2) {
  if (s1 === s2 || Math.abs(s1.length - s2.length) > 1) return false;
  const short = s1.length < s2.length ? s1 : s2, long = s2.length > s1.length ? s2 : s1;
  for (let i = 0, j = 0, offByOne = false; i < short.length; i++, j++) {
    if (short[i] !== long[j]) {
      if (offByOne) return !offByOne;
      if (short.length < long.length) i--;
      offByOne = true;
    }
  }
  return true;
}