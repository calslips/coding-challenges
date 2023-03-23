/*
Definition
A number is called Automorphic number if and only if its square ends in
the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

Notes
The number passed to the function is positive

Parameters: single number value
Returns:
  'Automorphic' if input number squared ends with the original input value
  'Not!!' if input number squared does NOT end with original input value
Examples:
  automorphic(1) // "Automorphic"
  automorphic(9) // "Not!!"
  automorphic(76) // "Automorphic"
  automorphic(95) // "Not!!"
Pseudocode:
  square input value
  convert squared value to string
    check if squaredString ends with input number converted to string
      if so, return 'Automorphic'
      otherwise, return 'Not!!'
*/

function automorphic(n) {
  return (n ** 2).toString().endsWith(n.toString()) ? 'Automorphic' : 'Not!!';
}