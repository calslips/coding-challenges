/*
You are given a list/array which contains only integers
(positive and negative). Your job is to sum only the numbers
that are the same and consecutive. The result should be one list.

Extra credit if you solve it in one line. You can assume there
is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1

#Examples:

[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"""So as you can see sum of consecutives 1 is 1
sum of 3 consecutives 4 is 12
sum of 0... and sum of 2
consecutives 3 is 6 ..."""

Parameters: an array of numbers
Returns: an array of numbers
  consecutive numbers are added together
  and replaced with the sum
Examples:
  sumConsecutives([1,4,4,4,0,4,3,3,1]) // [1,12,0,4,6,1]
  sumConsecutives([1,1,7,7,3]) // [2,14,3]
  sumConsecutives([-5,-5,7,7,12,0]) // [-10,14,12,0]
  sumConsecutives([3,3,3,3,1]) // [12, 1]
Pseudocode:
  initialize a result var assigned to an empty array
  initialize a sum var assigned to 0
  iterate over the input array
    add current value to sum
    if current equals next
      continue
    otherwise
      push sum to result
      reset sum to 0
  return result
*/

function sumConsecutives(s) {
  let result = [], sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += s[i];
    if (s[i] === s[i + 1]) continue;
    else result.push(sum), sum = 0;
  }
  return result;
}