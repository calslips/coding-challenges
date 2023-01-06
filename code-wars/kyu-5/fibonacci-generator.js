/*
Create a function generator genfib() that returns a function fib()
which always returns the next fibonacci number on each invocation
(and returns 0 when being called the first time).

Parameters: none
Returns: a num
  the current fib num,
  incrementing with each call
Examples:
  const fib = genfib();
  fib(); // -> returns 0
  fib(); // -> returns 1
  fib(); // -> returns 1
  fib(); // -> returns 2
Pseudocode:
  create a memoized version of fib using closure
  initialize memofib fn
    initialize count var as 0
    initialize memo var as an array containing 0 and 1
    if value in memo at count index exists
      increment count
      return value in memo at previous count
    otherwise
      add the last 2 values in memo and push sum to memo
      increment count
      return value in memo at previous count
*/

const genfib = () => {
  let x = 0, y = 1, z = null;
  return () => ([x, y, z] = [y, x + y, x]) && z;
}
const fib = genfib();

const genfib = () => {
  let i = 0;
  const memo = [0, 1];
  return () => i in memo ? memo[i++] : memo.push(memo[memo.length - 1] + memo[memo.length - 2]) && memo[i++];
}
const fib = genfib();