/*
Given a Divisor and a Bound,
Find the largest integer N,
Such That,
Conditions:
N is divisible by divisor
N is less than or equal to bound
N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only
positive values. It's guaranteed that a divisor is Found.

Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2),
(6) is less than or equal to bound (7), and
(6) is > 0 .

maxMultiple (10,50)  ==> return (50)
Explanation:
(50) is divisible by (10),
(50) is less than or equal to bound (50), and
(50) is > 0.

maxMultiple (37,200) ==> return (185)
Explanation:
(185) is divisible by (37),
(185) is less than or equal to bound (200), and
(185) is > 0.

Parameters: 2 nums
Returns: a num
  the largest num less than or equal to 2nd input
  (but greater than 0)
  that is divisible by 1st input
Examples:
  maxMultiple(2, 7), 6
  maxMultiple(3, 10), 9
  maxMultiple(7, 17), 14
  maxMultiple(10, 50), 50
  maxMultiple(37, 200), 185
  maxMultiple(7, 100), 98
Pseudocode:
  create a loop to run from 2nd input to 1, decrement by 1 each loop
    if current counter is evenly divisible by 1st input
      return current counter
    otherwise
      continue
*/

function maxMultiple(divisor, bound) {
  for (let i = bound; i > 0; i--) if (!(i % divisor)) return i;
}