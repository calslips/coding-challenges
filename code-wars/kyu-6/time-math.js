/*
Given two times in hours, minutes, and seconds (ie '15:04:24'),
add or subtract them. This is a 24 hour clock. Output should be
two digits for all numbers: hours, minutes, seconds (ie '04:02:09').

timeMath('01:24:31', '+', '02:16:05') === '03:40:36'
timeMath('01:24:31', '-', '02:31:41') === '22:52:50'

Parameters: 3 strs
  time in 'hh:mm:ss' format
  operation '+' or '-'
  time in 'hh:mm:ss' format
Returns: a str
  time in 'hh:mm:ss' format
Examples:
  timeMath('01:24:31', '+', '02:16:05'), '03:40:36'
  timeMath('01:24:31', '+', '22:35:28'), '23:59:59'
  timeMath('11:24:31', '-', '11:24:31'), '00:00:00'
  timeMath('11:24:31', '-', '03:15:28'), '08:09:03'
  timeMath('00:00:01', '+', '23:59:59'), '00:00:00'
  timeMath('13:48:52', '+', '13:47:53'), '03:36:45'
  timeMath('00:00:01', '-', '00:00:02'), '23:59:59'
  timeMath('13:48:52', '-', '13:47:53'), '00:00:59'
Pseudocode:
  convert both time inputs into arrays of nums
    (index 0 will be hr, 1 will be min, 2 will be sec)
  add/subtract respective time values according to op arg
  if op was addition
    if sec is greater than 59
      reassign sec to sec - 60
      increment min by 1
    if min is greater than 59
      reassign min to min - 60
      increment hr by 1
    if hr is greater than 23
      reassign hr to hr - 24
  if op was subtraction
    if sec is less than 0
      reassign sec to sec + 60
      decrement min by 1
    if min is less than 0
      reassign min to min + 60
      decrement hr by 1
    if hr is less than 0
      reassign hr to hr + 24
  return new times array mapped with each el padded with 0's to 2 digits, joined on ":"
*/

function timeMath(time1, op, time2) {
  const t1 = time1.split(':').map(Number), t2 = time2.split(':').map(Number);
  let [hr, min, sec] = t1.map((e, i) => op === '+' ? e + t2[i] : e - t2[i]);
  if (op === '+') {
    if (sec > 59) sec -= 60, min++;
    if (min > 59) min -= 60, hr++;
    if (hr > 23) hr -= 24;
  } else {
    if (sec < 0) sec += 60, min--;
    if (min < 0) min += 60, hr--;
    if (hr < 0) hr += 24;
  }
  return [hr, min, sec].map(e => `${e}`.padStart(2, 0)).join(':');
}