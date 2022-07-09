/*
Due to lack of maintenance the minute-hand has fallen off Town Hall clock
face.
And because the local council has lost most of our tax money to a Nigerian
email scam there are no funds to fix the clock properly.
Instead, they are asking for volunteer programmers to write some code that
tell the time by only looking at the remaining hour-hand!
What a bunch of cheapskates!
Can you do it?

Kata
Given the angle (in degrees) of the hour-hand, return the time in 12 hour
HH:MM format. Round down to the nearest minute.

Examples
12:00 = 0 degrees
03:00 = 90 degrees
06:00 = 180 degrees
09:00 = 270 degrees
12:00 = 360 degrees

Notes
0 <= angle <= 360
Do not make any AM or PM assumptions for the HH:MM result.
They are indistinguishable for this Kata.
3 o'clock is 03:00, not 15:00
7 minutes past midnight is 12:07
7 minutes past noon is also 12:07

Parameters: a single number
  (represents angle in degrees 0-360)
Returns: a string
  (represents the time in "HH:MM" format)
Examples:
  whatTimeIsIt(0) // '12:00'
  whatTimeIsIt(90) // '03:00'
  whatTimeIsIt(180) // '06:00'
  whatTimeIsIt(270) // '09:00'
  whatTimeIsIt(360) // '12:00'
Pseudocode:
  initialize an hour variable
    retrieve this value from input by getting the integer value of input / 30
    convert value to string, pad start with 0's up to 2 places
  initialize the minutes variable
    retrieve this value from input by doubling the remainder of input / 30
    round down the value
    convert value to string, pad start with 0's up to 2 places
  return hour concatted with colon concatted with minutes
*/

const whatTimeIsIt = function(angle) {
  return `${Math.floor(angle / 30) || 12}`.padStart(2, '0') + ':' + `${Math.floor(angle % 30 * 2)}`.padStart(2, '0');
}

// const whatTimeIsIt = function(angle) {
//   let hh = `${Math.floor(angle / 30) || 12}`.padStart(2, '0');
//   let mm = `${Math.floor(angle % 30 * 2)}`.padStart(2, '0');
//   return hh + ':' + mm;
// }