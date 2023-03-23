/*
A masked number is a string that consists of digits and
one asterisk (*) that should be replaced by exactly one
digit. Given a masked number s, find all the possible
options to replace the asterisk with a digit to produce
an integer divisible by 6.

Input/Output
[input] string s

A masked number.

1 ≤ inputString.length ≤ 10000.

[output] a string array

Sorted array of strings representing all non-negative
integers that correspond to the given mask and are
divisible by 6.

Example
For s = "1*0", the output should be ["120", "150", "180"].

For s = "*1", the output should be [].

For s = "1234567890123456789012345678*0",

the output should be

[
"123456789012345678901234567800",
"123456789012345678901234567830",
"123456789012345678901234567860",
"123456789012345678901234567890"]```
As you can see, the masked number may be very large ;-)

Parameters: a str
  representing nums with 1 digit being an *
  BigInts?
Returns: an arr of strs
  each str represents a num
  that is divisible by 6
Examples:
  isDivisibleBy6("1*0"), ["120","150","180"]
  isDivisibleBy6("*"), ["0","6"]
  isDivisibleBy6("*1"), []
  isDivisibleBy6("81234567890*"), ["812345678904"]
  isDivisibleBy6("41*"), ["414"]
  isDivisibleBy6("34234*2"), ["3423402","3423432","3423462","3423492"]
  isDivisibleBy6("1234567890123456789012345678*0"),
    [
      "123456789012345678901234567800",
      "123456789012345678901234567830",
      "123456789012345678901234567860",
      "123456789012345678901234567890"
    ]
Pseudocode:
  initialize a result var assigned to an empty arr
  initialize a location var assigned to index of *
  create a loop to run 10 times, counter 0-9, incrementing by 1
    replace asterisk with counter value
    if newNum is divisible by 6 (account for BigInts)
      push newNum to result arr
  return result arr
*/

function isDivisibleBy6(s) {
  const result = [], loc = s.indexOf('*');
  for (let i = 0; i < 10; i++) {
    const newS = s.slice(0, loc) + i + s.slice(loc + 1);
    if (!(BigInt(newS) % 6n)) result.push(newS);
  }
  return result;
}