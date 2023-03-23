/*
Given a time in AM/PM format as a string, convert it to military
(24-hour) time as a string.

Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a
24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and
12:00:00 on a 24-hour clock

Sample Input: 07:05:45PM Sample Output: 19:05:45

Try not to use built in DateTime libraries.

Parameters: a str
  12 hr time format
Returns: a str
  input converted to 24 hr time format
Examples:
  getMilitaryTime('12:00:01AM'), '00:00:01'
  getMilitaryTime('11:46:47PM'), '23:46:47'
Pseudocode:
  if input ends with pm and the 1st 2 chars converted to num is NOT equal to 12
    return 1st 2 nums + 12 concatted with input str slice from index 2 to -2
  if input ends with am and the 1st 2 chars converted to num EQUAL 12
    return str '00' concatted with input str slice from index 2 to -2
  return input str sliced from start to -2
*/

const getMilitaryTime = function(input) {
  const h = +input.slice(0, 2), ms = input.slice(2, -2);
  return input.endsWith('PM') && h !== 12 ? h + 12 + ms : input.endsWith('AM') && h === 12 ? '00' + ms : input.slice(0, -2);
};

const getMilitaryTime = function(input) {
  const h = +input.slice(0, 2);
  if (input.endsWith('PM') && h !== 12) return h + 12 + input.slice(2, -2);
  if (input.endsWith('AM') && h === 12) return '00' + input.slice(2, -2);
  return input.slice(0, -2);
};