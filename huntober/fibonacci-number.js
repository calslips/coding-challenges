/**
 * @param {number} n
 * @return {number}
 */

// runtime beats 90.3%, memory beats 97.9%
var fib = function(n) {
  // initialize a seq var assigned to an arr containing 0 and 1
  // create a loop to run as long as seq at index input is undefined
      // add the last two values within seq arr and push to seq
  // return value found at index n within seq array

  const seq = [0, 1];
  while (seq[n] === undefined) seq.push(seq[seq.length - 2] + seq[seq.length - 1]);
  return seq[n];
};

// Examples
console.log(fib(2), 1);
console.log(fib(3), 2);
console.log(fib(4), 3);