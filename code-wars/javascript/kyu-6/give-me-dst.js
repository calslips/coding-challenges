/*
For the purposes of this kata,
daylight savings time always starts on the 2nd sunday of March,
and ends on the 1st sunday of November.

Task
Write a function that takes a year as an argument and returns
  the date when Daylight Savings Time starts
Write a function that takes a year as an argument and returns
  the date when Daylight Savings Time ends

Parameters: a num (year)
Returns: a date obj
  dstStart = date obj for the start of dst of input year
    2nd Sunday of March (for kata)
  dstEnd = date obj for the end of dst of input year
    1st Sunday of Nov (for kata)
Examples:
  dstStart(2020), new Date('3/8/2020')
  dstEnd(2020), new Date('11/1/2020')
Pseudocode:
  get the day value of the 1st day of the month
    if it is 0
      for start, add 8 to it
      for end, add 1 to it
    otherwise
      for start, subtract day value from 15
      for end, subtract day value from 8
  create a new date obj using yyyy-mm-dd format
    replace dd with above day value
  return new date obj
*/

function dstStart(year) {
  return new Date(`${year}-03-${(d = new Date(`${year}-03-01`).getDay()) ? 15 - d : d + 8}`);
}

function dstEnd(year) {
  return new Date(`${year}-11-${(d = new Date(`${year}-11-01`).getDay()) ? 8 - d : ++d}`);
}