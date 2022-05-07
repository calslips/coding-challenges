/**
 * We want to generate a function that computes the series starting from 0
 * and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0

 */

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    const add = Array.from(Array(count > 0 ? count + 1 : 0), (e, i) => i).join('+');
    const sum = add.split('+').reduce((s, n) => s + +n, 0);
    return count < 0 ? `${count}<0` : count > 0 ? `${add} = ${sum}` : '0=0';
  };

  return SequenceSum;

})();