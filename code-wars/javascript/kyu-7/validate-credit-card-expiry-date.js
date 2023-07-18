/*
It is a simple, real world task. You will receive a single string
as input. It will have the month (2 digits) and year(2 or 4 digits).
These are separated by one character ("-" or "/", maybe some spaces too).

For example:
02/21
02 / 21
02 / 2021
02-2021

Assume that all dates are in the XXI century.

Your task is to write a function that returns true or false if the expiry
date is not in the past. Note, current month should still return true.

Parameters: a str
Return: a boolean
Examples:
  checkExpiryValid('03/15'), false
  checkExpiryValid('03/33'), true
  checkExpiryValid('03-15'), false
  checkExpiryValid('03 / 15'), false
  checkExpiryValid('03-2015'), false
Pseudocode:
  separate input month & year, convert to nums
  obtain current month & year
  if input year and current year are equal
    return whether input month is greater than or equal to current month
  otherwise
    return whether input year is greater than current year
*/

function checkExpiryValid (date) {
  const [inputMonth, inputYear] = [+date.slice(0, 2), +date.slice(-2)],
        [currentMonth, currentYear] = [(today = new Date()).getMonth(), today.getFullYear() - 2000];
  return inputYear === currentYear ? inputMonth >= currentMonth : inputYear > currentYear;
}