/*
Bob is a lazy man.
He needs you to create a method that can determine how many letters
(both uppercase and lowercase ASCII letters)
and digits are in a given string.

Example:
"hel2!lo" --> 6
"wicked .. !" --> 6
"!?..A" --> 1

Parameters: a string
Returns: a number
  (the count of letters or numbers
  in the input string)
Examples:
  countLettersAndDigits("hel2!lo") // 6
  countLettersAndDigits("n!!_ice!!123") // 7
  countLettersAndDigits("1") // 1
  countLettersAndDigits("?") // 0
  countLettersAndDigits("12345f%%%t5t&/6") // 10
  countLettersAndDigits("aBcDeFg090") // 10
  countLettersAndDigits("u_n_d_e_r__S_C_O_R_E") // 10
Pseudocode:
  initialize a count var, assigned to 0
  convert input string into an array of characters
  iterate over the input array
    if current char lowercased does NOT equal itself uppercased
    OR if current char can be converted to type number
    AND current char is NOT a space
      increment count
  return count
*/

function countLettersAndDigits(input) {
  return [...input].reduce((c, s) => s.toUpperCase() !== s.toLowerCase() || !isNaN(+s) && s !== ' ' ? ++c : c, 0);
}