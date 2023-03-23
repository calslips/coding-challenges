/*
You need to create a function that will validate if given
parameters are valid geographical coordinates.

Valid coordinates look like the following:
"23.32353342, -32.543534534". The return value should be
either true or false.

Latitude (which is first float) can be between 0 and 90,
positive or negative. Longitude (which is second float)
can be between 0 and 180, positive or negative.

Coordinates can only contain digits, or one of the
following symbols (including space after comma) __ -, . __

There should be no space between the minus "-" sign and
the digit after it.

Parameters: a string of 2 numbers
  (comma & space separated, can be neg/pos)
Returns: a boolean
  (whether input is valid lat/longs or not)
Examples:
  isValidCoordinates("-23, 25") // true
  isValidCoordinates("4, -3") // true
  isValidCoordinates("24.53525235, 23.45235") // true
  isValidCoordinates("04, -23.234235") // true
  isValidCoordinates("43.91343345, 143") // true
  isValidCoordinates("23.234, - 23.4234") // false
  isValidCoordinates("2342.43536, 34.324236") // false
  isValidCoordinates("N23.43345, E32.6457") // false
  isValidCoordinates("99.234, 12.324") // false
  isValidCoordinates("6.325624, 43.34345.345") // false
  isValidCoordinates("0, 1,2") // false
  isValidCoordinates("0.342q0832, 1.2324") // false
  isValidCoordinates("23.245, 1e1") // false
Pseudocode:
  split the input string into an array of 2 string nums
  convert both string nums to num
  check if 1st value is a valid number between -90 & 90
  check if 2nd value is a valid number between -180 & 180
  return whether or not both conditions above are true
*/

function isValidCoordinates(coordinates) {
  if (coordinates.includes('e')) return false;
  const [lat, long] = coordinates.split(', ').map(e => +e);
  return lat >= -90 && lat <= 90 && long >= -180 && long <= 180;
}