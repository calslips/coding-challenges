/**
 *Return an output string that translates an input string s/$s by replacing
 each character in s/$s with a number representing the number of times that
 character occurs in s/$s and separating each number with the character(s)
 sep/$sep.

freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"
 */

function freqSeq(str, sep) {
  return c = (sa = [...str]).reduce((o, k) => (o[k] = ++o[k] || 1, o), {}), sa.map(e => c[e]).join(sep);
}