/*
Sometimes it's useful to know on which day of the week Christmas,
the holly holiday, will occur.
Write a function which takes the date of Christmas, and outputs the
day of the week it falls on. Just don't limit yourself to this year.

Only valid Christmas dates will be passed to the function.

Date parameter could be a string or a Date object. If it's a string
here are possible date parameter formats:
'2013 12 25'
'12 25 2013'
'25 December 2013'

Note: calendar used in the kata is Gregorian.

Parameters: a string OR a date object
Returns: a string (the day of the week)
Examples:
  findOutChristmasWeekday('2013 12 25') // 'Wednesday'
Pseudocode:
  initialize a days array listing full day names (sun-sat)
  if input is a string
    reassign input to equal a new date obj with input passed in
  call getDay method on date obj to get day number (0-6)
  return days array value at index day number
*/

function findOutChristmasWeekday(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (typeof date === 'string') date = new Date(date);
  return days[date.getDay()];
}