/**
 * Number is a palindrome if it is equal to the number with digits in reversed
 * order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

Write a function which takes a positive integer and returns the number of special
steps needed to obtain a palindrome. The special step is: "reverse the digits,
and add to the original number". If the resulting number is not a palindrome,
repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

Example
For example, start with 87:

  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!
4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.

Parameters: a single number value
Return: the number of steps it takes to make the original number a palindrome,
  where each step involves taking the sum of n plus itself reversed and checking
  if the sum is a palindrome.
Examples:
  palindromeChainLength(44) // 0 (44 === itself reversed)
  palindromeChainLength(34) // 1 (34 + 43 = 77 === itself reversed)
  palindromeChainLength(86) // 3 (86 + 68 = 154 + 451 = 605 + 506 = 1111 === itself reversed)
Pseudocode:
  create variable assigned to value of n reversed

  base case
    check if n is equal to itself reversed
      return 0 if so

  recursive case
    return 1 plus recursive call to palindromeChainLength() with sum of reversed n + n as arg
 */

var palindromeChainLength = function(n) {
  const nReversed = +[...n.toString()].reverse().join('');
  if (n === nReversed) return 0;
  return palindromeChainLength(n + nReversed) + 1;
};