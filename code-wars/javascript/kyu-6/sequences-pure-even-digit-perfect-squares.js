/*
The integer 64 is the first integer that has all of its digits
even and furthermore, is a perfect square.

The second one is 400 and the third one 484.

Give the numbers of this sequence that are in the range [a,b]
(both values inclusive)

Examples:
Even digit squares between 100 to 1000:  [400, 484]
  (the output should be sorted)
Even digit squares between 1000 to 4000: []

Features of the random tests:
number of tests = 167
maximum value for a = 1e10
maximum value for b = 1e12

You do not have to check the entries; a and b are always
positive integers and a < b.

Parameters: 2 nums
Returns: an array of nums
  pure even digit perfect squares
  between the input range, inclusive
Examples:
  evenDigitSquares(100, 1000), [400, 484]
  evenDigitSquares(1000, 4000), []
  evenDigitSquares(10000, 40000), [26244, 28224, 40000]
Pseudocode:
  initialize a result array
  initialize a base var assigned to null
  create a loop to find the lowest base of 2 within range
  (start with even num and increment by 2s)
    if the sqrt of current num is an int
      assign sqrt value to base (if odd add 1)
      break out of loop
  create a loop to iterate over squares from sq of base to b input
  (incrementing base by 2s)
    if all digits of current sq are even
      push to result
    otherwise
      continue to next sq
  return result array
*/

function evenDigitSquares(a, b) {
  let result = [], base = null;
  for (let i = a % 2 ? ++a : a; i <= b; i += 2) if (Number.isInteger(n = i ** .5) && (base = n % 2 ? ++n : n)) break;
  for (let s = base ** 2; base && s <= b; s = (base += 2) ** 2) if ([...`${s}`].every(d => !(d % 2))) result.push(s);
  return result;
}