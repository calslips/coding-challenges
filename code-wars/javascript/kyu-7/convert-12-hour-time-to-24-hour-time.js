/*
Converting a normal (12-hour) time like "8:30 am" or "8:30 pm"
to 24-hour time (like "0830" or "2030") sounds easy enough,
right? Well, let's see if you can do it!

You will have to define a function named "to24hourtime", and
you will be given an hour (always in the range of 1 to 12,
  inclusive), a minute (always in the range of 0 to 59,
    inclusive), and a period (either "am" or "pm") as input.

Your task is to return a four-digit string that encodes that
time in 24-hour time.

Parameters:
  a num
  a num
  a str
Returns: a str
Examples:
  to24hourtime( 1,  0, "am"), "0100"
  to24hourtime( 1,  0, "pm"), "1300"
  to24hourtime(12,  0, "am"), "0000"
  to24hourtime(12,  0, "pm"), "1200"
  to24hourtime( 6, 30, "am"), "0630"
  to24hourtime( 9, 45, "pm"), "2145"
Pseudocode:
  if period is 'pm' and hour is less than 12
    add 12 to hour
  if period is 'am' and hour is 12
    reassign hour to 0
  pad the start of hour with 0's up to 2 digits
  pad the start of minute with 0's up to 2 digits
  return padded hour and minute concatted
*/

function to24hourtime(hour, minute, period) {
  period === 'pm' && hour < 12 && (hour += 12) || period === 'am' && hour === 12 && (hour = 0);
  return `${hour}`.padStart(2, 0) + `${minute}`.padStart(2, 0);
}