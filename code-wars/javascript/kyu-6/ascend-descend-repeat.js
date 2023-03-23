/*
You are given three integer inputs: length, minimum, and maximum.

Return a string that:
Starts at minimum
Ascends one at a time until reaching the maximum, then
Descends one at a time until reaching the minimum
repeat until the string is the appropriate length

Examples:
 length: 5, minimum: 1, maximum: 3   ==>  "12321"
 length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
 length: 11, minimum: 5, maximum: 9  ==>  "56789876567"

Notes:
length will always be non-negative
negative numbers can appear for minimum and maximum values
hyphens/dashes ("-") for negative numbers do count towards the length
the resulting string must be truncated to the exact length provided
return an empty string if maximum < minimum or length == 0
minimum and maximum can equal one another and result in a single number
repeated for the length of the string

Parameters: 3 numbers
  length, min, max
Returns: a string
  containing digits climbing from min to max
  and back down from max to min by a value of 1,
  repeating until reaching length
Examples:
  ascendDescent(5, 1, 3) // "12321"
  ascendDescent(14, 0, 2) // "01210121012101"
  ascendDescent(11, 5, 9) // "56789876567"
Pseudocode:
  if max is less than min OR length is 0
    return empty string
  if min and max are equal
    return min converted to str and repeated length times
  initialize ascend var assigned to true
  initialize result var assigned to empty string
  create a loop
  starts at min
  iterates as long as result length is less than length input
  increments OR decrements based on ascend var value
    concat counter with result
    if counter is at max
      reassign ascend to false
    otherwise if counter is at min
      reassign ascend to true
  return result
    (potential excess sliced off from concat'g large/neg nums)
*/

function ascendDescend(length, min, max) {
  if (max < min || !length) return '';
  if (min === max) return min.toString().repeat(length);
  let result = '', ascend = true;
  for (let i = min; result.length < length; ascend ? i++ : i--) {
    result += i;
    if (i === max) ascend = false;
    else if (i === min) ascend = true;
  }
  return result.slice(0, length);
}