/**
 * Oh no, our Math object was "accidently" reset. Can you
 * re-implement some of those functions? We can assure, that only
 * non-negative numbers are passed as arguments. So you don't have
 * to consider things like undefined, null, NaN, negative numbers,
 * strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()
 */

/*
Parameters: a float
Returns: an int
Examples:
  Math.round(0.4), 0
  Math.round(0.5), 1
Pseudocode:
  call math trunc on input number & add 0.5 to it
  if input num is less than above num
    return result of Math.floor called on input num
  otherwise
    return result of Math.ceil called on input num
*/

Math.round = function(number) {
  return number < Math.trunc(number) + .5 ? Math.floor(number) : Math.ceil(number);
};

/*
Parameters: a float
Returns: an int
Examples:
  Math.ceil(0.4), 1
  Math.ceil(0.5), 1
Pseudocode:
  isolate the int portion of input num using math.trunc
  if int equals input num
    return int
  otherwise
    return int + 1
*/

Math.ceil = function(number) {
  return (int = Math.trunc(number)) === number ? int : ++int;
};

/*
Parameters: a float
Returns: an int
Examples:
  Math.floor(0.4), 0
  Math.floor(0.5), 0
Pseudocode:
  call math.trunc on the input num and return the result
*/

Math.floor = function(number) {
  return Math.trunc(number);
};