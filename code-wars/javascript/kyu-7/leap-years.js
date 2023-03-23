/*
In this kata you should simply determine, whether a given
year is a leap year or not. In case you don't know the rules,
here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested,
so you don't have to validate them

Parameters: a num
  (only valid years, pos ints)
Returns: a boolean
  (whether input is a leap year)
Examples:
  isLeapYear(1234), false
  isLeapYear(1984), true
  isLeapYear(2000), true
  isLeapYear(2010), false
  isLeapYear(2013), false
Pseudocode:
  if year is divisible by 4
  and NOT divisible by 100
    it is a leap year
  if year is divisble by 100
  BUT divisible by 400
    it is a leap year
  otherwise
    it is not
*/

function isLeapYear(year) {
  return year % 100 && !(year % 4) || !(year % 400);
}