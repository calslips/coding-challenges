/**
 * Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
 */

const reverseSeq = n => Array.from({length: n}).map((_, i) => n - i);

// const reverseSeq = n => Array.from({length: n}).map((e, i) => i + 1).reverse();