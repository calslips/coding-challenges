/*
With Cereal crops like wheat or rice, before we can eat the grain
kernel, we need to remove that inedible hull, or to separate the
wheat from the chaff.

Task
Given a sequence of n integers , separate the negative numbers
(chaff) from positive ones (wheat).!alt

Notes
Sequence size is at least 3

Return a new sequence, such that negative numbers (chaff) come
first, then positive ones (wheat).

In Java , you're not allowed to modify the input Array/list/Vector

Have no fear , it is guaranteed that there will be no zeroes.

Repetition of numbers in the input sequence could occur , so
duplications are included when separating.

If a misplaced positive number is found in the front part of the
sequence, replace it with the last misplaced negative number
(the one found near the end of the input). The second misplaced
positive number should be swapped with the second last misplaced
negative number. Negative numbers found at the head (begining) of
the sequence , should be kept in place .

Input >> Output Examples:

wheatFromChaff ({7, -8, 1 ,-2}) ==> return ({-2, -8, 1, 7})
Explanation:
Since 7  is a positive number , it should not be located at the
beginnig so it needs to be swapped with the last negative number -2.

wheatFromChaff ({-31, -5, 11 , -42, -22, -46, -4, -28 }) ==>
  return ({-31, -5,- 28, -42, -22, -46 , -4, 11})
Explanation:
Since, {-31, -5}  are negative numbers found at the head (begining)
of the sequence , so we keep them in place .
Since 11 is a positive number, it's replaced by the last negative
which is -28 , and so on till sepration is complete.

wheatFromChaff ({-25, -48, -29, -25, 1, 49, -32, -19, -46, 1}) ==>
  return ({-25, -48, -29, -25, -46, -19, -32, 49, 1, 1})
Explanation:
Since {-25, -48, -29, -25}  are negative numbers found at the head
(begining) of the input , so we keep them in place .
Since 1 is a positive number, it's replaced by the last negative
which is -46 , and so on till sepration is complete.
Remeber, duplications are included when separating , that's why the
number 1 appeared twice at the end of the output.

Tune Your Code , There are 250 Assertions , 100.000 element For Each .
Only O(N) Complexity Solutions Will pass .

Parameters: an array of nums
Returns: an array of nums
Examples:
  wheatFromChaff([2,-4,6,-6]), [-6,-4,6,2]
  wheatFromChaff([-30,-11,36,38,34,-5,-50]), [-30,-11,-50,-5,34,38,36]
  wheatFromChaff([-7,-35,-46,-22,46,43,-44,-14,34,-5,-26]), [-7,-35,-46,-22,-26,-5,-44,-14,34,43,46]
  wheatFromChaff([-22,-20,-32]), [-22,-20,-32]
  wheatFromChaff([9,9,20]), [9,9,20]
Pseudocode:
  find index of 1st positive num
  find index of last negative num
  create a loop to run as long as pos index is less than neg index
    swap pos and neg vals at their respective indices
    reassign 1st pos & last neg to reflect new 1st pos & last neg
  return modified input array
*/

function wheatFromChaff(values) {
  let [pos, neg] = findIndices(values, 0, values.length - 1);
  while (pos >= 0 && pos < neg) {
    [values[pos], values[neg]] = [values[neg], values[pos]];
    [pos, neg] = findIndices(values, pos + 1, neg - 1);
  }
  return values;
}

function findIndices(array, start, end) {
  let pos = -1, neg = -1;
  for (let i = start; i < end; i++) {
    if (array[i] > 0) {
      pos = i;
      break;
    }
  }
  for (let j = end; j > start; j--) {
    if (array[j] < 0) {
      neg = j;
      break;
    }
  }
  return [pos, neg];
}