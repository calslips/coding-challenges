/*
I will give you a string. You respond with "VALID" if the
string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:
More than 3 characters but less than 20.
Must contain only alphanumeric characters.
Must contain letters and numbers.

Parameters: a string
Returns: a string
  'VALID' for valid password
  'INVALID' fro invalid password
Examples:
  validPass('Username123') // 'VALID'
  validPass('Username') // 'INVALID'
  validPass('1Username') // 'VALID'
  validPass('123') // 'INVALID'
  validPass('a12') // 'INVALID'
  validPass('1234') // 'INVALID'
  validPass('a123') // 'VALID'
  validPass('Username123!') // 'INVALID'
  validPass('passw0rdIsntTooLong') // 'VALID'
  validPass('passw0rd1CharTooLong') // 'INVALID'
Pseudocode:
  lowercase the password and split into an array of chars
  if length is less than 4 or greater than 19
    return 'INVALID'
  if some chars are NOT a letter or num
    return 'INVALID'
  if there are no letters OR if there are no nums
    return 'INVALID'
  otherwise
    return 'VALID'
*/

function validPass(password) {
  password = [...password.toLowerCase()]
  if (password.length < 4 || password.length > 19) return 'INVALID';
  else if (password.some(c => c.charCodeAt() > 122 || c.charCodeAt() < 97 && isNaN(parseInt(c)))) return 'INVALID';
  else if (!password.some(c => c.charCodeAt() > 96 && c.charCodeAt() < 123) || !password.some(c => !isNaN(parseInt(c)))) return 'INVALID';
  return 'VALID';
}