package leetcode.java.easy;

/*
Given two strings s and t, return true if t is an anagram of s,
and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters
of a different word or phrase, typically using all the original
letters exactly once.

Parameters: 2 strings
Returns: a boolean
Examples:
  Input: s = "anagram", t = "nagaram"
  Output: true

  Input: s = "rat", t = "car"
  Output: false
Pseudocode:
  if input lengths do NOT match
    return false
  initialize a count array the size of the alphabet
    to keep track of letters found
    (index 0 represents 'a' through index 25 represents 'z')
    & their count (the values found at the respective index)
  iterate over the length of 1st input string
  keep track of index, starting at 0
    increment the value within count array at index of char at current index of 1st str minus 'a'
    decrement the value within count array at index of char at current index of 2nd str minus 'a'
      (subtracting results in char code difference
      'a' char code is 97
      'z' char code is 122
      difference between 'a' and 'a' is 0
      difference between 'z' and 'a' is 25
      associating each char with their respective index in count array)
  iterate over the count array
    if any value is NOT 0
      return false
  return true
*/

class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }
        for (int num : count) if (num != 0) return false;
        return true;
    }
}

// import java.util.Map;
// import java.util.HashMap;

// class Solution {
//     public boolean isAnagram(String s, String t) {
//         Map<String, Integer> letterMap = new HashMap<>();
//         for (String letter : s.split("")) {
//             if (letterMap.containsKey(letter)) letterMap.put(letter, letterMap.get(letter) + 1);
//             else letterMap.put(letter, 1);
//         }
//         for (String letter : t.split("")) {
//             if (!letterMap.containsKey(letter)) return false;
//             letterMap.put(letter, letterMap.get(letter) - 1);
//             if (letterMap.get(letter) == 0) letterMap.remove(letter);
//         }
//         if (!letterMap.isEmpty()) return false;
//         return true;
//     }
// }