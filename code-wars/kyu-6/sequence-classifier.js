/*
A series or sequence of numbers is usually the product of a
function and can either be infinite or finite.

In this kata we will only consider finite series and you are
required to return a code according to the type of sequence:

Code	Type	Example
0	unordered	[3,5,8,1,14,3]
1	strictly increasing	[3,5,8,9,14,23]
2	not decreasing	[3,5,8,8,14,14]
3	strictly decreasing	[14,9,8,5,3,1]
4	not increasing	[14,14,8,8,5,3]
5	constant	[8,8,8,8,8,8]

You can expect all the inputs to be non-empty and completely
numerical arrays/lists - no need to validate the data; do not
go for sloppy code, as rather large inputs might be tested.

Try to achieve a good solution that runs in linear time; also,
do it functionally, meaning you need to build a pure function
or, in even poorer words, do NOT modify the initial input!

Parameters: an array of numbers
Returns: a number
  based on sequence classification
Examples:
  sequenceClassifier([3,5,8,1,14,3]) // 0
  sequenceClassifier([3,5,8,9,14,23]) // 1
  sequenceClassifier([3,5,8,8,14,14]) // 2
  sequenceClassifier([14,9,8,5,3,1]) // 3
  sequenceClassifier([14,14,8,8,5,3]) // 4
  sequenceClassifier([8,8,8,8,8,8]) // 5
  sequenceClassifier([8,9]) // 1
  sequenceClassifier([8,8,8,8,8,9]) // 2
  sequenceClassifier([9,8]) // 3
  sequenceClassifier([9,9,9,8,8,8]) // 4
Pseudocode:
  if every element is the same
    return 5
  if every element is less than the next OR +Infinity
    return 1
  if every element is less than or equal to the next OR +Infinity
    return 2
  if every element is greater than the next OR -Infinity
    return 3
  if every element is greater than or equal to the next OR -Infinity
    return 4
  otherwise it's jumbled and there is no order
    return 0
*/

function sequenceClassifier(arr) {
  if (arr.every(n => n === arr[0])) return 5;
  else if (arr.every((n, i) => n < (arr[i + 1] || +Infinity))) return 1;
  else if (arr.every((n, i) => n <= (arr[i + 1] || +Infinity))) return 2;
  else if (arr.every((n, i) => n > (arr[i + 1] || -Infinity))) return 3;
  else if (arr.every((n, i) => n >= (arr[i + 1] || -Infinity))) return 4;
  else return 0;
}