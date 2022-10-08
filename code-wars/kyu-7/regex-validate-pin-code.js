/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot
contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true,
else return false.

Parameters: a string
Returns: a boolean
  whether the input string is exactly 4 or 6
  digits AND each char is a number
Examples:
  "1234"   -->  true
  "12345"  -->  false
  "a234"   -->  false
Pseudocode:
  if input length is 4 OR 6
    iterate over the length of the string
      if every char can be converted to number
        continue
      otherwise
        return false
    return true
  otherwise
    return false
*/

function validatePIN (pin) {
  if (pin.length === 4 || pin.length === 6) {
    for (let c of pin) if (isNaN(parseInt(c))) return false;
    return true;
  }
  return false;
}