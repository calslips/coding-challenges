/*
The aim of this Kata is to modify the Fixnum
( JS: Number CS: extension for int) class to give it the
palindrome_below ( JS: palindromeBelow CS: PalindromeBelow )
method. This method returns all numbers from and including 1 up
to but not including itself that are palindromes for a given base.

For example in base 2 (binary)
1 = "1"
2 = "10"
3 = "11"
4 = "100"

Therefore 1 and 3 are palindromes in base two and the method
should return the following.

    5..palindromeBelow(2)
    => [1, 3]

Parameters: a num
Returns: an array of nums
Examples:
  4..palindromeBelow(2), [1,3]
  15..palindromeBelow(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
Pseudocode:
  initialize a palindromes var assigned to an empty array
  create a loop to iterate from 1 to n-1
    convert current num to input base
    if converted num is a palindrome
      push current num to palindromes array
  return palindromes
*/

Number.prototype.palindromeBelow = function(base) {
  return Array
    .from({length: this - 1}, (_, i) => ++i)
    .filter(n => n.toString(base) === [...n.toString(base)].reverse().join(''));
}