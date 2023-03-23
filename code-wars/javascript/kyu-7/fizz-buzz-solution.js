/**
 * Write a function that takes an integer and returns an array [A, B, C],
 * where A is the number of multiples of 3 (but not 5) below the given
 * integer, B is the number of multiples of 5 (but not 3) below the given
 * integer and C is the number of multiples of 3 and 5 below the given
 * integer.

For example, solution(20) should return [5, 2, 1]
 */

function solution(number) {
  return is = Array.from({length: number - 1}, (_, i) => i + 1), [is.filter(n => !(n % 3) && n % 5).length, is.filter(n => !(n % 5) && n % 3).length, is.filter(n => !(n % 3) && !(n % 5)).length];
}