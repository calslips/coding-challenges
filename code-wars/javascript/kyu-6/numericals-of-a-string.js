/**
 * You are given an input string.

For each symbol in the string if it's the first character occurrence,
replace it with a '1', else replace it with the amount of times you've
already seen it.

Examples:
input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
There might be some non-ascii characters in the string.

Take note of performance
 */

function numericals(s) {
  const count = {};
  let result = ''
  s.split('').forEach(e => {
    count[e] = (++count[e] || 1)
    result += count[e];
  });
  return result;
}