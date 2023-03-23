/**
 * Given a string of digits confirm whether the sum of all the individual
 * even digits are greater than the sum of all the indiviudal odd digits.
 * Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"
 */

function evenOrOdd(str) {
  const [odd, even] = [...str].reduce((oe, n) => +n % 2 ? [oe[0] += +n, oe[1]] : [oe[0], oe[1] += +n] , [0, 0]);
  return odd > even ? 'Odd is greater than Even' : odd < even ? 'Even is greater than Odd' : 'Even and Odd are the same';
}