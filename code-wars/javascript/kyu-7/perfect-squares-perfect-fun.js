/*
Given an integer, if the length of it's digits is a perfect square,
return a square block of sqroot(length) * sqroot(length).
If not, simply return "Not a perfect square!".

Examples:

1212 returns:

"12
12"

Note:
4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

123123123 returns:

"123
123
123"

Note:
9 digits so 3 squared (3x3 perfect square). 3 digits on each line.

Parameters: a num
Returns: a str
Examples:
  squareIt(1), '1'
  squareIt(222), 'Not a perfect square'
  squareIt(234562342342), 'Not a perfect square!'
  squareIt(88989), 'Not a perfect square!'
  squareIt(112141568), '112\n141\n568'
Pseudocode:
  convert input num to str
  if length of str num is 1
    return str num
  otherwise if the sqrt of str num length is an integer
    iterate over the length of the str num from end to start
      slice in new line char every sqrt places
      return modified str num
  return 'Not a perfect square!'
*/

function squareIt(int) {
  let sqStr = `${int}`, sqrt = Math.sqrt(sqStr.length);
  if (!Number.isInteger(sqrt)) return 'Not a perfect square!';
  for (let i = sqStr.length - sqrt; i > 0; i -= sqrt) sqStr = sqStr.slice(0, i) + '\n' + sqStr.slice(i);
  return sqStr;
}