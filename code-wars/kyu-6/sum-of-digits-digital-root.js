/**
 * Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit,
continue reducing in this way until a single-digit number is produced.
The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

function digital_root(n) {
  if (n < 10) return n;

  const newN = n.toString().split('').reduce((sum, num) => sum + (+num), 0);
//   const digits = n.toString().split('');
//   if (digits.length < 2) return n;
//   const newN = digits.reduce((sum, num) => sum + (+num), 0);
  return digital_root(newN);
}

// function digital_root(n) {
//   return (n < 10)
//     ? n
//     : digital_root(n.toString().split('').reduce((sum, num) => +num + sum, 0));
// }

/*
Parameters: single number value, always positive
Return: recursively add each digit together until sum is a single digit value
Examples:
  digital_root(321) // 6
  digital_root(641) // 11 => 2
  digital_root(739256) // 32 => 5
Pseudocode:
  base case
    check if n is single digit, return if so

  recursive case
    convert number to string
    spread string into an array where each element is a singular string digit
    convert each element into number value
    sum together all the elements
    pass sum value into new digital_root function call
*/

function digital_root(n) {
  return n < 10
    ? n
    : digital_root([...n.toString()].reduce((s, n) => s + +n, 0));
}