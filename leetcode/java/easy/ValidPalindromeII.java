package leetcode.java.easy;

/*
Given a string s, return true if the s can be palindrome after
deleting at most one character from it.

Constraints:
1 <= s.length <= 105
s consists of lowercase English letters.

Parameters:
  original method
    a str
  overloaded method
    a str
    an int
Returns: a boolean
Examples:
  Input: s = "aba"
  Output: true

  Input: s = "abca"
  Output: true
  Explanation: You could delete the character 'c'.

  Input: s = "abc"
  Output: false
Pseudocode:
  og method
    return call to overloaded method with input str & int param as 0
  overloaded method
    if int param is greater than 1
      return false
    iterate over the input str with 2 pointers
    1st at start, 2nd at end
    increment 1st & decrement 2nd each loop
      if char at 1st pointer does NOT equal char at 2nd pointer
        increment int param
        return result of
          recursive call to fn with sliced str between 1st pointer exclusive & 2nd pointer inclusive
          OR recursive call to fn with sliced str between 1st pointer inclusive & 2nd pointer exclusive
          passing in updated int param for both
    return true
*/

// runtime 9 ms beats 85.71%, memory 44.3 mb beats 85.79%
class ValidPalindromeIISolution {
  public boolean validPalindrome(String s) {
      return validPalindrome(s, 0);
  }
  private boolean validPalindrome(String s, int deleted) {
      if (deleted > 1) return false;
      for (int i = 0, j = s.length() - 1; i < j; i++, j--) {
          if (s.charAt(i) != s.charAt(j)) {
              deleted++;
              return validPalindrome(s.substring(i + 1, j + 1), deleted) || validPalindrome(s.substring(i, j), deleted);
          }
      }
      return true;
  }
}