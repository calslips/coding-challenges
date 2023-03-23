/*
  Parameters: a string
  Returns: the number of zeros present in the input string
    following zero guidelines below:
    values that count as 1 zero:
      one zero	abdegopq069DOPQR         () <-- A pair of braces as a zero
    values that count as 2 zeros:
      two zero	%&B8
  Examples:
    countzero("") // 0
    countzero("0") // 1
    countzero("1234567890") // 5
    countzero("abcdefghijklmnopqrstuvwxyz") // 8
  Pseudocode:
    define count variable, initialized to zero
    define variable for values that represent single zeros
    define variable for values that represent double zeros
    convert input string to an array, split on each char
      iterate over string array
        check if current value in string array matches a double zero value
          if so add 2 to count
        otherwise
          check if currrent value matches a single zero value
          OR if the current value is an opening parenthesis and the next value is a closing parenthesis
            if so add 1 to count
          otherwise
            continue to next iteration
    return count variable
 */

function countzero(s) {
  const oneZ = 'abdegopq069DOPQR';
  const twoZ = '%&B8';
  return [...s].reduce((z, c, i) => twoZ.includes(c) ? z += 2 : oneZ.includes(c) || c === '(' && s[i + 1] === ')' ? ++z : z, 0);
}