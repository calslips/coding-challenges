/*
Your task is to write a function named do_math that receives a
single argument. This argument is a string that contains multiple
whitespace delimited numbers. Each number has a single alphabet
letter somewhere within it.

Example : "24z6 1x23 y369 89a 900b"
As shown above, this alphabet letter can appear anywhere within
the number. You have to extract the letters and sort the numbers
according to their corresponding letters.

Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246
(ordered according to the alphabet letter)
Here comes the difficult part, now you have to do a series of
computations on the numbers you have extracted.

The sequence of computations are + - * /. Basic math rules do NOT
apply, you have to do each computation in exactly this order.
This has to work for any size of numbers sent in (after division,
  go back to addition, etc).
In the case of duplicate alphabet letters, you have to arrange them
according to the number that appeared first in the input string.
Remember to also round the final answer to the nearest integer.

Parameters: a str
Returns: a num
Examples:
  doMath("24z6 1z23 y369 89z 900b"), 1414
  doMath("24z6 1x23 y369 89a 900b"), 1299
  doMath("10a 90x 14b 78u 45a 7b 34y"), 60
  doMath("111a 222c 444y 777u 999a 888p"), 1459
  doMath("1z 2t 3q 5x 6u 8a 7b"), 8
Pseudocode:
  initialize a computations array containing fns
    each takes in 2 nums and performs a mathematical operation
    addition, subtraction, multiplication, division
  convert input str into an array of strs, split on space
  sort str array
    by the letter found within the str (not a num)
  map over sorted
    remove the letter and convert to num
  reduce num array
    call computations fn found at current index mod computations length
    on prev & current value passed in & return result
  return reduced value
*/

function doMath(s) {
  const comps = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => a / b];
  return Math.round(s
    .split(' ')
    .sort((a, b) => [...a].find(e => isNaN(e)).localeCompare([...b].find(e => isNaN(e))) || s.indexOf(a) - s.indexOf(b))
    .map(e => +[...e].filter(v => !isNaN(v)).join(''))
    .reduce((p, c, i) => comps[--i % comps.length](p, c))
  );
}