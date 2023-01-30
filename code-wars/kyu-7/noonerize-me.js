/*
Spoonerize... with numbers... numberize?... numboonerize?...
noonerize? ...anyway! If you don't yet know what a spoonerism is
and haven't yet tried my spoonerism kata, please do check it out
first.

You will create a function which takes an array of two positive
integers, spoonerizes them, and returns the positive difference
between them as a single number or 0 if the numbers are equal:

[123, 456] = 423 - 156 = 267
Your code must test that all array items are numbers and return
"invalid array" if it finds that either item is not a number. The
provided array will always contain 2 elements.

When the inputs are valid, they will always be integers, no floats
will be passed. However, you must take into account that the
numbers will be of varying magnitude, between and within test cases.

Parameters: an array of nums
  the elements could be other data types
Returns:
  a num OR
  a str
    if input array contains any non nums
Examples:
  noonerize([12, 34]), 18
  noonerize([55, 63]), 12
  noonerize([357, 579]), 178
  noonerize([1000000, 9999999]), 7000001
Pseudocode:
  if the input array contains any non numbers
    return str "invalid array"
  use destructured assignment
    convert each el to str
    swap the first digits
    convert back to num
  return the absolute value of the difference between the modified nums
*/

function noonerize(numbers) {
  return numbers.some(e => isNaN(e)) ? 'invalid array' : ([a, b] = numbers.map((n, i, a) => +(`${a[+!i]}`[0] + `${n}`.slice(1))), Math.abs(a - b));
}

function noonerize(numbers) {
  if (numbers.some(e => isNaN(e))) return 'invalid array';
  let [a, b] = numbers.map((n, i, a) => +(`${a[+!i]}`[0] + `${n}`.slice(1)));
  return Math.abs(a - b);
}

function noonerize(numbers) {
  if (numbers.some(e => isNaN(e))) return 'invalid array';
  let [a, b] = numbers.map(String);
  [a, b] = [+(b[0] + a.slice(1)), +(a[0] + b.slice(1))];
  return Math.abs(a - b);
}