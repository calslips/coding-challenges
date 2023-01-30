/*
For example 99 will have "weight" 18, 100 will have "weight" 1 so
in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order
can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if
they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes
before as a string.

All numbers in the list are positive numbers and the list can be
empty.

Notes
it may happen that the input string have leading, trailing
whitespaces and more than a unique whitespace between two
consecutive numbers

Parameters: a str
  space separated nums
Returns: a str
  modified order of nums
  according to "weight"
Examples:
  orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99"
  orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999"
Pseudocode:
  split str on spaces to have an array of str nums
  sort array of str nums
    sum each nums digits & compare numerically ascending
    if both sums are equal
      compare original str nums as strs alphabetically
  join sorted str nums array on spaces to be a str of space separated nums
  return sorted str
*/

function orderWeight(str) {
  const weights = str.split(' ');
  weights.sort((...weight) => {
    const [aWeight, bWeight] = weight.map(w => [...w].reduce((s, n) => s + +n, 0));
    return aWeight - bWeight || weight[0].localeCompare(weight[1]);
  });
  return weights.join(' ');
}

function orderWeight(str) {
  const weights = str.split(' ');
  weights.sort((a, b) => {
    const aWeight = [...a].reduce((s, n) => s + +n, 0),
          bWeight = [...b].reduce((s, n) => s + +n, 0);
    return aWeight - bWeight || a.localeCompare(b);
  });
  return weights.join(' ');
}