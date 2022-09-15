/*
You have an array of integers and have a frog at the first position

[Frog, int, int, int, ..., int]

The integer itself may tell you the length and the direction of the jump

For instance:
 2 = jump two indices to the right
-3 = jump three indices to the left
 0 = stay at the same position

Your objective is to find how many jumps are needed to jump out of the array.
Return -1 if Frog can't jump out of the array

Example:
array = [1, 2, 1, 5];
jumps = 3  (1 -> 2 -> 5 -> <jump out>)

Parameters: an array of numbers
  each number represents how far and
  in what direction the frog will jump
Returns: a number
  how many jumps it takes to exit array
  or -1 if it never exits
Examples:
  solution([1, 2, 2, -1]) // 4
  solution([1, 2, 1, 5]) // 3
  solution([1, 1, 1, 1]) // 4
  solution([1, -1]) // -1
  solution([-3]) // 1
Pseudocode:
  initialize jump count variable assigned to 1
  iterate over the input array, index starting at 0
    if the next value is 0 or jumps exceed array length
      return -1
    if the frogs next jump is to an undefined value (outside)
      return jump count
    reassign index to equal itself plus current value
    increment jump count
*/

function solution(a) {
  for (let i = 0, jumps = 1; i < a.length; i += a[i], jumps++) {
    if (a[i + a[i]] === 0 || jumps > a.length) return -1;
    else if (a[i + a[i]] === undefined) return jumps;
  }
}