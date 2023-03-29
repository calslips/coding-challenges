/*
Write a function that accepts an integer n and a string s as
parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

Parameters:
  an int
  a str
Returns: a str
  str input repeated int input times
Examples:
  Solution.repeatStr(4, "a"), "aaaa"
  Solution.repeatStr(3, "Hello"), "HelloHelloHello"
  Solution.repeatStr(5, ""), ""
  Solution.repeatStr(0, "kata"), ""
Pseudocode:
  initialize result str
  initialize count int to equal input int
  while count is greater than 0
    concat result with input str
    decrement count
  return result str
*/

public class Solution {
  public static String repeatStr(final int repeat, final String string) {
    String result = "";
    int count = repeat;
    while (count > 0) {
      result += string;
      count--;
    }
    return result;
  }
}