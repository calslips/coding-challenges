/*
Check that a number is a valid number that has been given to 2
decimal places. The number passed to the function will be given
as a string. If the number satisfies the criteria below, the
function should return true, else it should return false.

Please check the criteria for a valid number:

optional + or - symbol in front

optional digits before a decimal point (digits are characters
  ranging from '0' to '9')

a decimal point

exactly two digits after the point

nothing else

Examples of valid and non-valid numbers

List of valid numbers:
  [ "0.00" "3.90" "1000.00" ".00" "-2.55" "+2.10" "-.55"]

List of non-valid numbers:
  ["hellow 11.99" "11.9" "11" "11." ".9"]

Parameters: a str
Returns: a boolean
  if input can be a valid num to 2 decimal places
Examples:
  validNumber("0.00"), true
  validNumber(".00"), true
  validNumber("-.00"), true
  validNumber(".30"), true
  validNumber("0.40"), true
  validNumber("34443.33"), true
  validNumber(".0a"), false
  validNumber("1.00."), false
  validNumber(".+00"), false
  validNumber("w.00"), false
  validNumber("..00"), false
  validNumber("1,00"), false
Pseudocode:
  if input str num can be converted to a num
  AND its 3rd char from the right is a decimal
    return true
  otherwise
    return false
*/

function validNumber(num) {
  return !isNaN(num) && num.at(-3) === '.';
}