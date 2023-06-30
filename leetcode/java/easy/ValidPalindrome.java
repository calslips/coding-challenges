package leetcode.java.easy;

/*
A phrase is a palindrome if, after converting all uppercase
letters into lowercase letters and removing all non-alphanumeric
characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome,
or false otherwise.

Parameters: a string
Returns: a boolean
Examples:
  Input: s = "A man, a plan, a canal: Panama"
  Output: true
  Explanation: "amanaplanacanalpanama" is a palindrome.

  Input: s = "race a car"
  Output: false
  Explanation: "raceacar" is not a palindrome.

  Input: s = " "
  Output: true
  Explanation: s is an empty string "" after removing
    non-alphanumeric characters. Since an empty string reads the
    same forward and backward, it is a palindrome.
Pseudocode:
  convert input s to lowercase
    and sanitize to contain only alphanumeric chars
  iterate over half the length of s
    if char at current index does NOT equal char at opposite position
      return false
  return true
*/

// runtime 3 ms beats 97.93%, memory 41.9 mb beats 88.64%
class Solution {
    public boolean isPalindrome(String s) {
        for (int i = 0, j = s.length() - 1; i < j; i++, j--) {
            while (i < j && !Character.isLetterOrDigit(s.charAt(i))) i++;
            while (j > i && !Character.isLetterOrDigit(s.charAt(j))) j--;
            if (Character.toLowerCase(s.charAt(i)) != Character.toLowerCase(s.charAt(j))) return false;
        }
        return true;
    }
}

// runtime 18 ms beats 45.49%, memory 44.1 mb beats 28.21%
// class Solution {
//   public boolean isPalindrome(String s) {
//       s = s.toLowerCase().replaceAll("[^a-z0-9]", "");
//       for (int i = 0; i < s.length() / 2; i++) {
//           if (s.charAt(i) != s.charAt(s.length() - 1 - i)) return false;
//       }
//       return true;
//   }
// }