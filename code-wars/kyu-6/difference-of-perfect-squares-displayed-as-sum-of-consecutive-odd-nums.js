/*
This kata will return a string that represents the difference of
two perfect squares as the sum of consecutive odd numbers.

Specifications:
• The first input minus the second input reveals the exact number
of consecutive odd numbers required for the solution - you can
check this in the examples below.
• The first input will always be larger than the second.
• All inputs will be valid so no need for error checking.
• Outputs will always be positive.
• Inputs will range between 0 and 200, (inclusive).
• In the returned string there are spaces before and after the
plus sign, the minus sign and the equals sign but nowhere else.

Examples:
squaresToOdd(9, 5) --> "9^2 - 5^2 = 11 + 13 + 15 + 17 = 56"
squaresToOdd(10, 7) --> "10^2 - 7^2 = 15 + 17 + 19 = 51"
squaresToOdd(100, 98) --> "100^2 - 98^2 = 197 + 199 = 396"
squaresToOdd(100, 99) --> "100^2 - 99^2 = 199 = 199"

Parameters: 2 nums
Returns: a str
  equation of the difference of both inputs squared equalling
  the sum of n (difference between inputs) consecutive odds
Examples:
  squaresToOdd(3, 0), "3^2 - 0^2 = 1 + 3 + 5 = 9"
  squaresToOdd(5, 0), "5^2 - 0^2 = 1 + 3 + 5 + 7 + 9 = 25"
  squaresToOdd(10, 0), "10^2 - 0^2 = 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19 = 100"
  squaresToOdd(6, 5), "6^2 - 5^2 = 11 = 11"
  squaresToOdd(79, 72), "79^2 - 72^2 = 145 + 147 + 149 + 151 + 153 + 155 + 157 = 1057"
  squaresToOdd(63, 57), "63^2 - 57^2 = 115 + 117 + 119 + 121 + 123 + 125 = 720"
  squaresToOdd(15, 8), "15^2 - 8^2 = 17 + 19 + 21 + 23 + 25 + 27 + 29 = 161"
Pseudocode:
  initialize result to equal the diff of both inputs squared
  initialize count to equal the diff between both inputs
  initialize odds to equal an empty array
  initialize avg to equal result divided by count
  initialize a loop
    index to 0
    set value to avg plus 1 minus count,
    run as long as index is less than count
    increment index by 1 and value by 2 each iteration
      push current value to odds array
  return template literal containing input1^2 minus input2^2
    equalling odds array joined on plus signs equalling result
*/

function squaresToOdd(sqr1, sqr2) {
  const result = sqr1 ** 2 - sqr2 ** 2, count = sqr1 - sqr2, average = result / count, odds = [];
  for (let i = 0, value = average - count + 1; i < count; i++, value += 2) odds.push(value);
  return `${sqr1}^2 - ${sqr2}^2 = ${odds.join(' + ')} = ${result}`;
}