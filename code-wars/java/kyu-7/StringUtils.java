/*
Complete the code which should return true if the given object
is a single ASCII letter (lower or upper case), false otherwise.

Parameters: string
Returns: boolean
  determine whether input string is
  a letter a-z or not (case insensitive)
Examples:
  StringUtils.isLetter(""), false
  StringUtils.isLetter("a"), frue
  StringUtils.isLetter("X"), true
  StringUtils.isLetter("7"), false
  StringUtils.isLetter("*"), false
  StringUtils.isLetter("ab"), false
  StringUtils.isLetter("a\n"), false
Pseudocode:
  import pattern class from regex
  call pattern's matches method
    1st arg, pattern for letters a-z, ignore case
    2nd arg, the input str
  return matches method's boolean result
*/

import java.util.regex.Pattern;

public class StringUtils {
  public static boolean isLetter(String s) {
    return Pattern.matches("[a-zA-Z]", s);
  }
}