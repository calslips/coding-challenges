/*
Complete the function so that it returns the number of seconds that have
elapsed between the start and end times given.

Tips:
The start/end times are given as Date (JS/CoffeeScript), DateTime (C#),
Time (Nim), datetime(Python) and Time (Ruby) instances.
The start time will always be before the end time.

Parameters: start date object and end date object
Returns: number of seconds between start and end times
Examples:
  doTest(new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 0, 2)) // 1
  doTest(new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 0, 20)) // 19
  doTest(new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 1, 20)) // 79
Pseudocode:
  convert both dates into ms
  convert ms to seconds
  subtract start seconds from end seconds
  return difference
*/

function elapsedSeconds(startDate, endDate) {
  return Date.parse(endDate) / 1000 - Date.parse(startDate) / 1000;
}