/*
In this kata, you need to write a function that takes a string and
a letter as input and then returns the index of the second
occurrence of that letter in the string. If there is no such letter
in the string, then the function should return -1. If the letter
occurs only once in the string, then -1 should also be returned.

Examples:
second_symbol('Hello world!!!','l') --> 3
second_symbol('Hello world!!!', 'A') --> -1

Parameters:
  a string
  a char
Returns: an int
  index of 2nd occurrence of char in string
  or -1 if not present
Examples:
  SecondOccurrence.secondSymbol("Hello world!!!", 'l'), 3
  SecondOccurrence.secondSymbol("Hello world!!!", 'o'), 7
  SecondOccurrence.secondSymbol("Hello world!!!", 'A'), -1
  SecondOccurrence.secondSymbol("", 'q'), -1
  SecondOccurrence.secondSymbol("Hello", '!'), -1
Pseudocode:
  iterate over the chars of the input str
  (initialize a second counter var at 0 to keep track of occurrences)
    if char at current index equals the input char
      increment second counter
    if second counter equals 2
      return current index
  return -1
  (runs when a 2nd occurrence is NOT found)
*/

public class SecondOccurrence {
  public static int secondSymbol(String str, char c) {
    for (int i = 0, j = 0; i < str.length(); i++) {
      if (str.charAt(i) == c) j++;
      if (j == 2) return i;
    }
    return -1;
  }
}