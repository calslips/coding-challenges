/*
In Math, an improper fraction is a fraction where the numerator
(the top number) is greater than or equal to the denominator
(the bottom number) For example: 5/3 (five third).

A mixed numeral is a whole number and a fraction combined into
one "mixed" number. For example: 1 1/2 (one and a half) is a
mixed numeral.

Task
Write a function convertToMixedNumeral to convert the improper
fraction into a mixed numeral.

The input will be given as a string (e.g. '4/3').

The output should be a string, with a space in between the whole
number and the fraction (e.g. '1 1/3'). You do not need to
reduce the result to its simplest form.

For the purpose of this exercise, there will be no 0, empty
string or null input value. However, the input can be:
a negative fraction
a fraction that does not require conversion
a fraction that can be converted into a whole number

Parameters: a str
  an improper fraction
Returns: a str
  a mixed numeral (while num space fraction)
  potential for input that doesnt req a conversion
  or input can be converted to a whole num
Examples:
  convertToMixedNumeral('6/2'), '3'
  convertToMixedNumeral('74/3'), '24 2/3'
  convertToMixedNumeral('-504/26'), '-19 10/26'
  convertToMixedNumeral('9/18'), '9/18'
Pseudocode:
  isolate numerator & denominator, split input on forward slash
  calc whole num to equal int portion of numerator divided by denominator
  calc new numerator to be the abs value of remainder of old numerator divided by denominator
  if whole num is an integer (no remainder from n / d)
    return whole num str
  if int portion of whole num is 0
    return input as is
  otherwise
    return str containing whole num trunc'd ' ' new numerator '/' old denominator
*/

function convertToMixedNumeral(f) {
  const [n, d] = f.split('/'), i = Math.trunc(n / d);
  return n % d ? i ? `${i} ${Math.abs(n % d)}/${d}` : f : `${i}`;
}

function convertToMixedNumeral(f) {
  const [n, d] = f.split('/'), i = n / d;
  return !(n % d) ? `${i}` : !Math.trunc(i) ? f : `${Math.trunc(i)} ${Math.abs(n % d)}/${d}`;
}

function convertToMixedNumeral(f) {
  const [n, d] = f.split('/'), i = n / d;
  return Number.isInteger(i) ? `${i}` : !Math.trunc(i) ? f : `${Math.trunc(i)} ${Math.abs(n % d)}/${d}`;
}