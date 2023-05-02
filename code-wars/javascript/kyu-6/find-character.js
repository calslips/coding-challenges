/*
Give you a character matrix. Find out the character which has the
smallest amount.

Arguments:
matrix: A string that contains some letters. Each row is separated
by "\n".

Results & Note:
Returns the characters which has smallest amount, using string format.
If more than one characters are found, sort them according to the order
  A-Za-z0-9.
You can assume that there are at least two characters in the matrix.
Please ignore the "\n" ;-)

Parameters: a str
  rows separated by '\n'
Returns: a str
  the char with the fewest occurrences
  if more than one, sort A-Za-z0-9
Examples:
  let matrix =
    `00000000
     0000O000
     00000000
     00000000
     00000000`
  findCharacters(matrix) , "O"

  matrix =
    `mmmmmmmmmmmmm
     mmmmmmmmmmmmm
     mmmmmmmmmmmmm
     mmmmmmmmmnmmm`
  findCharacters(matrix) , "n"

  matrix =
    `AAAAAAAAAAA
     AABBBBBBBBB
     BCCCCCCCCDD
     DDDDEEEEFFF`
  findCharacters(matrix) , "F"

  matrix =
    `AAAAA
     ABBBB
     BCCCC
     DDDDE
     EEEEF
     FFFFF`
  findCharacters(matrix) , "CD"

  matrix =
    `3v652
     1uwyt
     v254v
     t54tv
     x45yx
     s7x45
     5402v
     2x3xw
     5w22v`
  findCharacters(matrix) , "su0167"
Pseudocode:
  initialize hash
  split input on new line char
  iterate over the array of rows
    split each row on chars
    iterate over the each char of the row
      if char exists in hash,
        increment its value
      otherwise
        set it as a key in hash with the value of 1
  find the min value within hash
  convert hash to an array of keys
  filter array of keys to include values that match min
  sort filtered array
    if both chars are not nums
      return the difference between a's charcode and b's charcode
    if only a is not a num
      return -1
    if only b is not a num
      return 1
    otherwise
      return the difference between num a and num b
  return sorted array joined as a str
*/

function findCharacters(matrix) {
  const hash = matrix.split('\n').reduce((o, r) => (r.split('').forEach(c => o[c] = ++o[c] || 1), o), {}),
        min = Math.min(...Object.values(hash));
  return Object
    .keys(hash)
    .filter(k => hash[k] === min)
    .sort((a, b) => isNaN(a) && isNaN(b) ? a.charCodeAt() - b.charCodeAt() : isNaN(a) ? -1 : isNaN(b) ? 1 : a - b)
    .join('');
}