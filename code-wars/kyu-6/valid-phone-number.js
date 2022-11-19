/*
Write a function that accepts a string,
and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will
produce a valid phone number.

Only worry about the following format:
(123) 456-7890
(don't forget the space after the close parentheses)

Parameters: a string (a phone number)
Returns: a boolean
  whether phone num is in proper format
  '(###) ###-####'
Examples:
  validPhoneNumber("(123) 456-7890") // true
  validPhoneNumber("(1111)555-2345") // true
  validPhoneNumber("(098) 123 4567") // true
Pseudocode:
  iterate over the input str
    if index 0 is NOT an opening parenthesis
      return false
    if index 4 is NOT a closing parenthesis
      return false
    if index 5 is NOT a space
      retunr false
    if index 9 is NOT a hyphen
      return false
    otherwise if any other value is NOT a number
      return false
  return true if none of the above occurs
*/

function validPhoneNumber(phoneNumber) {
  for (let i = 0; i < phoneNumber.length; i++) {
    if (i === 0) {
      if (phoneNumber[i] !== '(') return false;
    } else if (i === 4) {
      if (phoneNumber[i] !== ')') return false;
    } else if (i === 5) {
      if (phoneNumber[i] !== ' ') return false;
    } else if (i === 9) {
      if (phoneNumber[i] !== '-') return false;
    } else if (isNaN(phoneNumber[i])) return false;
  }
  return true;
}

// for better validation,
// should verify that phoneNumber length equals 14