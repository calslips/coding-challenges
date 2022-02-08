/**
 * In this Kata, you will be given a string that has lowercase letters and
 * numbers. Your task is to compare the number groupings and return the
 * largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of
all number groupings.
 */

function solve(s){
  return Math.max(
    ...[...s].reduce((p, c, i) => {
      if (Number.isInteger(+c) && Number.isInteger(+p.slice(-1))) {
        p[p.length - 1] += c;
      } else {
        p.push(c);
      }
      return p;
    }, [])
    .filter(e => Number.isInteger(+e))
    .map(Number));
}