/*
In the following 6 digit number:
283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:
1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence
of five consecutive digits found within the number given.
The number will be passed in as a string of only digits. It
should return a five digit integer. The number passed may be as
large as 1000 digits.

Parameters: a string (of numbers)
Returns: a 5 digit number
  greatest sequence of 5 consecutive digits from input
Examples:
  "1234567890" // 67890
  "1234567898765" // 98765
  "731674765" // 74765
Pseudocode:
  initialize a largest var assigned to 1st 5 digits of input
  converted to number
  iterate over the input str
  (starting at index 1, increment by 1, stop 5 digits before length)
    compare values from current index through +5 positions converted to num
    with largest num
      if new is larger, reassign largest to equal it
    otherwise
      continue
  return largest
*/

function solution(digits) {
  let l = +digits.slice(0, 5);
  for (let i = 1; i < digits.length - 4; i++) if ((n = +digits.slice(i, i + 5)) > l) l = n;
  return l;
}