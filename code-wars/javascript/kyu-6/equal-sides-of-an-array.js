/*
You are going to be given an array of integers. Your job is to take
that array and find an index N where the sum of the integers to the
left of N is equal to the sum of the integers to the right of N.
If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position
of the array, the sum of left side of the index ({1,2,3}) and the
sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position
of the array, the sum of left side of the index ({1}) and the sum
of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added.
(Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages
the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array
can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the
side to the right of N. If you do not find an index that fits these
rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest
correct index.

Paramters: an array of numbers
Returns: a number
  the index of the element where the sum of all
  the digits on the left equal to the sum of all
  the digits on the right
Examples:
  findEvenIndex([1,2,3,4,3,2,1]) // 3
  findEvenIndex([1,100,50,-51,1,1]) // 1
  findEvenIndex([1,2,3,4,5,6]) // -1
  findEvenIndex([20,10,30,10,10,15,35]) // 3
Pseudocode:
  iterate over the array
    declare left var
      to equal copy of input from start to current
    declare right var
      to equal copy of input from after current through end
    reassign left to be the sum of all its contents
    reassign right to be the sum of all its contents
    if left equals right
      return current index
  return -1
*/

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    const left = arr.slice(0, i).reduce((s, n) => s + n, 0);
    const right = arr.slice(i + 1).reduce((s, n) => s + n, 0);
    if (left === right) return i;
  }
  return -1;
}