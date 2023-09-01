/*
Given two strings s1 and s2, whose alphabet consist only 0 and 1.
Your task is to count how many times s1 appear as a substring in s2.

For example, if s2 is "1001110110" while the pattern string s1 is "11",
your output should be 3, because the pattern s1 3 times appeared in s2.

Still don't understand the problem? Look at the following examples:

Examples
For s1 = "11", s2 = "1001110110", the output should be 3.

Fisrt s1 in s2 -----> "1001110110"

Second s1 in s2--> "1001110110"

Third s1 in s2 ----> "1001110110"

For s1 = "101", s2 = "110010010010001", the output should be 0.

There is no s1 in s2.

For s1 = "1010", s2 = "110100010101011", the output should be 3.

Fisrt s1 in s2 -----> "110100010101011"

Second s1 in s2--> "110100010101011"

Third s1 in s2 ----> "110100010101011"

Note
2 <= s1.length <=10

10 <= s2.length <=1000000

In order to avoid timeout, be aware of the code's performance

Paramaters: 2 strs
Returns: a num
Examples:
  count("11", "1001110110"), 3
  count("101", "110010010010001"), 0
  count("1010", "110100010101011"), 3
  count("0000", "1000000001"), 5
Pseudocode:
  initialize count var assigned to 0
  iterate over the difference between 2nd input str & 1st input str lengths
    slice 2nd str from current counter to length of 1st str + counter
    if sliced str contains 1st str
      increment count
  return count
*/

function count(s1, s2) {
  let tally = 0;
  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    if (s2.slice(i, s1.length + i).includes(s1)) tally++;
  }
  return tally;
}