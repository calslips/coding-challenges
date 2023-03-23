/*
You'll be given a list of two strings, and each will contain exactly one
colon (":") in the middle (but not at beginning or end). The length of the
strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the
  original list), but with the characters after each colon swapped.

Parameters: an array containing 2 strings, each containing a colon
Returns:
  an array with 2 strings, where everything after the colon is swapped
Examples:
  tailSwap(['abc:123', 'cde:456']) // ['abc:456', 'cde:123']
  tailSwap(['a:12345', '777:xyz']) // ['a:xyz', '777:12345']
Pseudocode:
  find the index of the colon in the first element
  find the index of the colon in the second element
  create a new array
    1st elem contains 1st elem from 0 index to colon, then portion of second elem from colon to end
    2nd elem contains 2nd elem from 0 index to colon, then portion of first elem from colon to end
  return new array
*/

function tailSwap(arr) {
  const colon1 = arr[0].indexOf(':');
  const colon2 = arr[1].indexOf(':');
  return [arr[0].slice(0, colon1) + arr[1].slice(colon2), arr[1].slice(0, colon2) + arr[0].slice(colon1)];
}