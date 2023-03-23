/*
Return a function that will trim a string (the first argument given)
if it is longer than the maximum string length (the second argument
  given). The result should also end with "..."

These dots at the end also add to the string length.

So in the above example, trim("Creating kata is fun", 14) should
return "Creating ka..."

If the string is smaller than or equal to 3 characters then the
length of the dots is not added to the string length.

e.g. trim("He", 1) should return "H..."

If the string is smaller or equal than the maximum string length,
then simply return the string with no trimming or dots required.

e.g. trim("Code Wars is pretty rad", 50) should return
"Code Wars is pretty rad"

Parameters:
  a str
  a num
Returns: a str
  snippet of input str trimmed
  to the length of input num
  with an ellipse added to the end
Examples:
  trim("Creating kata is fun", 14), "Creating ka..."
  trim("He", 1), "H..."
  trim("Code Wars is pretty rad", 50), "Code Wars is pretty rad"
Pseudocode:
  if input str length is less than or equal to size
    return str as is
  if size is 3 or less
    return snippet of str with length equal to size concatted with '...'
  otherwise
    return snippet of str with length equal to size minus 3 concatted with '...'
*/

function trim(str, size) {
  return str.length <= size ? str : size <= 3 ? str.slice(0, size) + '...' : str.slice(0, size - 3) + '...';
}