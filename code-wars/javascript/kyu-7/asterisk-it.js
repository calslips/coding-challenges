/*
You are given a function that should insert an asterisk (*)
between every pair of even digits in the given input, and return
it as a string. If the input is a sequence, concat the elements
first as a string.

Input
The input can be an integer, a string of digits or a sequence
containing integers only.

Output
Return a string.

Parameters: a str, a num, or an array of nums
Returns: a str
  with asterisks inserted b/w pairs of even digits
Examples:
  asteriscIt(5312708), '531270*8'
  asteriscIt(9682135), '96*8*2135'
  asteriscIt(2222), '2*2*2*2'
  asteriscIt(1111), '1111'
  asteriscIt(9999), '9999'
  asteriscIt('0000'), '0*0*0*0'
  asteriscIt(8), '8'
  asteriscIt(2), '2'
  asteriscIt(0), '0'
  asteriscIt([1, 4, 64, 68, 67, 23, 1]), '14*6*4*6*8*67231'
Pseudocode:
  convert input into a str of digits
  iterate over str digits
    if current num is even AND next num is even
      reassign str digis to be itself sliced from beginning to current + 1
        concatted with an asterisk
        concatted with current + 1 to end
      increment counter by 1
  return str digits
*/

function asteriscIt(n) {
  return [...isNaN(n) ? n.join('') : `${n}`].reduce((s, e, i) => !(e % 2 || s.at(-1) % 2) ? s + '*' + e : s + e);
}

function asteriscIt(n) {
  return [...isNaN(n) ? n.join('') : `${n}`].reduce((s, e, i, a) => !(a[i] % 2 || a[--i] % 2) ? s + '*' + e : s + e);
}

function asteriscIt(n) {
  n = Array.isArray(n) ? n.join('') : `${n}`;
  for (let i = 0; i < n.length - 1; ) if (!(n[i++] % 2) && !(n[i] % 2)) n = n.slice(0, i) + '*' + n.slice(i++);
  return n;
}