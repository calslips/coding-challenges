/*
Let us begin with an example:
Take a number: 56789. Rotate left, you get 67895.

Keep the first digit in place and rotate left the other digits:
  68957.
Keep the first two digits in place and rotate the other ones:
  68579.
Keep the first three digits and rotate left the rest:
  68597.

Now it is over since keeping the first four it remains only one
digit which rotated is itself.

You have the following sequence of numbers:
56789 -> 67895 -> 68957 -> 68579 -> 68597
and you must return the greatest: 68957.

Task
Write function max_rot(n) which given a positive integer n
returns the maximum number you got doing rotations similar to
the above example.

So max_rot (or maxRot or ... depending on the language) is such as:
max_rot(56789) should return 68957
max_rot(38458215) should return 85821534

Parameters: a num
Returns: a num
  max num of all rotations of input num
Examples:
  maxRot(38458215), 85821534
  maxRot(195881031), 988103115
  maxRot(896219342), 962193428
  maxRot(69418307), 94183076
Pseudocode:
  initialize a rotations var assigned to an array containing input
  initialize rotation as input num converted to a str
  iterate over rotation length - 1, counter at 0, increment by 1
    reassign rotation to equal
      rotation sliced from 0 to counter
      concatted with rotation sliced from counter + 1 thru the end
      concatted with rotation sliced from counter to counter + 1
    convert new rotation to num and push to rotations array
  return the max value within rotations array
*/

function maxRot(n) {
  let r = `${n}`, rs = [n];
  for (let i = 0; i < --r.length; i++) r = r.slice(0, i) + r.slice(i + 1) + r.slice(i, i + 1), rs.push(+r);
  return Math.max(...rs);
}