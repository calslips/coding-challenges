/*
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .

Notes
Number passed is always Positive .

Return the result as a Boolean

Input >> Output Examples
tidyNumber (12) ==> return (true)
Explanation:
The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

tidyNumber (32) ==> return (false)
Explanation:
The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

tidyNumber (1024) ==> return (false)
Explanation:
The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .

tidyNumber (13579) ==> return (true)
Explanation:
The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .

tidyNumber (2335) ==> return (true)
Explanation:
The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3


Parameters: a single positive number value
Returns: boolean
  true if n's digits do NOT decrease in value from left to right
  false if any of n's digits DO decrease in value from left to right
Examples:
  tidyNumber(2789) // true
  tidyNumber(2335) // true
  tidyNumber(102) // false
  tidyNumber(9672) // false
Pseudocode:
  separate digits of n by converting to string and spreading it into an array
  iterate over the array
    convert element to number
    test if every digit is greater than / equal to the previous
      (if previous doesn't exist, as for the first value, compare current to 0)
      return true if so, false otherwise
*/

function tidyNumber(n) {
  return [...n.toString()].every((d, i, a) => +d >= (+a[i - 1] || 0));
}