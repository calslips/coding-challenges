/*
Each exclamation mark's weight is 2; each question mark's weight is 3.
Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more
heavy, return "Right"; if they are balanced, return "Balance".


Parameters: 2 strings each containing exclamation marks and/or question marks
  (exclamations are valued at 2 each, questions are valued at 3 each)
Returns:
  return string 'Left' if the left strings value is greater than the right
  return string 'Right' if the right strings value is greater than the left
  return string 'Balancee' if the left and right strings values are equal
Examples:
  balance("!!","??") // "Right"
  balance("!??","?!!") // "Left"
  balance("!?!!","?!?") // "Left"
  balance("!!???!????","??!!?!!!!!!!") // "Balance"
Pseudocode:
  split both input strings into an array, where each character is an element
  convert each character into its associated value
  reduce both array of values into a singular summed number value
    (have a left sum and a right sum)
  compare left and right sum values
    return left if > right
    return right if > left
    return balance if ===
*/

function balance(left,right) {
  [left, right] = [left, right].map(s => [...s].map(e => e === '!' ? 2 : 3).reduce((s, n) => s + n));
  return left > right ? 'Left' : right > left ? 'Right' : 'Balance';
}