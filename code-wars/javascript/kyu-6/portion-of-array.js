/*
You will be given an Array(a), starting position (i) and number
of portion to return (n) . Your task is to return n portion of
the array (a) starting from position (i ). The starting position
could be negative, in that case you should start counting
reverse direction till you get all your n portion. In case you
can not find the exact n portion of elements counting from the
starting position i or the starting position i is out of the
index of the array, you should return -1
(throw an ArgumentOutOfRangeException in C#).

example:

function p([1,2,3,4],1,2)
  should return [2,3]

  how ?
  Array => [1,2,3,4]
            | | | |
  index =>  0 1 2 3
  portion     |_|   => [2,3]

function p([1,2,3,4],-1,2)
  should return [2,3]

  how ?
  Array => [1,  2,  3, 4]
            |   |   |  |
  index=>   -3 -2  -1  0
  portion=>     |___|      =>[2,3]

function p([1],1,5)
  should return -1

  how ?
  Array => [1]
            |
  index=>   0
  required starting index => 1 ,
  which does not exist so we return -1

Parameters:
  an array
  a num, index to start
  a num, size of portion to return
Returns:
  an array containing the values within portion confines
Examples:
  portion([1, 2, 3, 4], 1, 2), [2, 3]
  portion([1, 2, 3, 4], -1, 2), [2, 3]
  portion([1], 1, 5), -1
Pseudocode:
  convert index to abs value
  if abs value index is out of bounds of input array
  OR the length of the array is less than input n
    return -1
  if original i was neg
    reassign a to be a copy of itself reversed
  return a sliced from abs value index to abs value index plus n
*/

function portion(a, i, n) {
  return a.length < Math.abs(i) + n ? -1 : i < 0 ? a.slice(i - n, i) : a.slice(i, i + n);
}

function portion(a, i, n, j = Math.abs(i)) {
  return a.length < j + n ? -1 : i < 0 ? a.slice(i - n, i) : a.slice(j, j + n);
}

function portion(a, i, n, j = Math.abs(i)) {
  if (a.length < j + n) return -1;
  const part = i < 0 ? a.slice(i - n, i) : a.slice(j, j + n);
  return part;
}

function portion(a, i, n, j = Math.abs(i)) {
  if (a.length < j + n) return -1;
  const part = (i < 0 ? [...a].reverse() : a).slice(j, j + n);
  return i < 0 ? part.reverse() : part;
}

function portion(a, i, n) {
  const j = Math.abs(i);
  if (a.length < j + n) return -1;
  const part = (i < 0 ? [...a].reverse() : a).slice(j, j + n);
  return i < 0 ? part.reverse() : part;
}