/**
 * Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
 */

function fizzbuzz(n) {
  return Array(n).fill(1).map((n, i) => (n + i) % 3 === 0 && (n + i) % 5 === 0 ? 'FizzBuzz' : (n + i) % 3 === 0 ? 'Fizz' : (n + i) % 5 === 0 ? 'Buzz' : n + i);
}
