/*
The number 89 is the first integer with more than one digit that
fulfills the property partially introduced in the title of this
kata. What's the use of saying "Eureka"? Because this sum gives
the same number:

89 = 8^1 + 9^2

The next number in having this property is 135:

135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two
integers a, b that defines the range [a, b] (inclusive) and
outputs a list of the sorted numbers in the range that fulfills
the property described above.

Parameters: 2 nums
Returns: an array of nums
Examples:
  sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9]
  sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
  sumDigPow(10, 100),  [89]
  sumDigPow(90, 100), []
  sumDigPow(90, 150), [135]
  sumDigPow(50, 150), [89, 135]
  sumDigPow(10, 150), [89, 135]
Pseudocode:
  initialize result var assigned to an empty array
  iterate over nums a to b inclusive
    if each digit of num raised to its consecutive power
    and summed fits in range
      push to result
  return result
*/

function sumDigPow(a, b) {
  return Array
    .from({length: b - a + 1}, (_, i) => a + i)
    .filter(n => n === [...`${n}`].reduce((s, d, i) => s + d ** ++i, 0));
}

function sumDigPow(a, b) {
  const res = [];
  for (let n = a; n <= b; n++) {
    const r = [...`${n}`].reduce((s, d, i) => s + d ** ++i, 0);
    if (n === r) res.push(n);
  }
  return res;
}