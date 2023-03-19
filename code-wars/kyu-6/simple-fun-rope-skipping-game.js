/*
Some children are playing rope skipping game. Children skip the
rope at roughly the same speed: once per second. If the child
fails during the jump, he needs to tidy up the rope and continue.
This will take 3 seconds.

You are given an array failedCount, where each element is the
jump count at the failed. ie. [12,23,45] means the child failed 3
times in the game process. The 1st mistake occurred when he
jumped 12 times; The 2nd mistake occurred when he jumped 23 times;
The 3rd mistake occurred when he jumped 45 times.

Your task is to calculate how many times the child jumped in 60
seconds.

Note:
Each child persisted at least 60 jumps, which meant it could have
been over 60 seconds, but the child continued to skip rope.

Input/Output
[input] integer array failedCount
  0 ≤ failedCount.length ≤ 60
  1 ≤ failedCount[i] ≤ 60
[output] an integer
  how many times the child jumped in 60 seconds.

Example
For failedCount = [], the output should be 60.
There is no mistake in the game process.
So the child jumped 60 times in 60 seconds.
For failedCount = [12, 23, 45], the output should be 51.

The 1st mistake occurred when he jumped 12 times. --> 12 seconds past.
Tidy up the rope and continue.                    --> 15 seconds past.
The 2nd mistake occurred when he jumped 23 times. --> 26 seconds past.
Tidy up the rope and continue.                    --> 29 seconds past.
The 3rd mistake occurred when he jumped 45 times. --> 51 seconds past.
Tidy up the rope and continue.                    --> 54 seconds past.
When he jumped 51 times                           --> 60 seconds past.

Parameters: an array of nums
  each el is jump count at time of fail
Returns: a num
  total jump count at 60 sec
Examples:
  tiaosheng([]), 60
  tiaosheng([12, 23, 45]), 51
  tiaosheng([17]), 57
  tiaosheng([10, 20, 30, 40]), 48
  tiaosheng([10, 20, 30, 40, 58]), 48
  tiaosheng([10, 20, 30, 40, 47, 60]), 47
  tiaosheng([1,2,3,4,5,6,7,8,9,10]), 30
  tiaosheng([58]), 58
Pseudocode:
  if failed count has no length
    return 60
  iterate over the input array in reverse
    initialize var to keep track of current time alotted
      (count of els from start to current * 3 plus current value)
    if current time is between 60 and 64 exclusive
      return current el
    if current time is less than or equal to 60
      return current el plus the difference between 60 and current time
*/

function tiaosheng(failedCount) {
  if (!failedCount.length) return 60;
  for (let i = failedCount.length, t = i * 3 + failedCount[--i]; i >= 0; t = i * 3 + failedCount[--i]) {
    if (t > 60 && t < 64) return failedCount[i];
    if (t <= 60) return failedCount[i] + 60 - t;
  }
}