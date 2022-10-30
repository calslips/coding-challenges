/*
A list S will be given. You need to generate a list T from it
by following the given process:

Remove the first and last element from the list S and add them
to the list T.
Reverse the list S
Repeat the process until list S gets emptied.
The above process results in the depletion of the list S. Your
task is to generate list T without mutating the input List S.

Example
S = [1,2,3,4,5,6]
T = []

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T

Note
size of S goes up to 10^6
Keep the efficiency of your code in mind.
Do not mutate the Input.

Parameters: an array of numbers
Returns: an array of numbers with the order modified
Examples:
  arrange([1,2]) // [1,2]
  arrange([4, 3, 2]) // [4, 2, 3]
  arrange([9, 7, -2, 8, 5, -3, 6, 5, 1]) // [9, 1, 5, 7, -2, 6, -3, 8, 5]
  arrange([1]) // [1]
  arrange([]) // []
  arrange([2, 4, 3, 4]) // [2, 4, 3, 4]
Pseudocode:
  initialize a result var assigned to an empty array
  iterate over half the length of input array
  (keeping track of front and back pointers,
  front increments / back decrements)
    if front equals back (odd length'd input)
      push value at front to result and break out of loop
    if front is odd
      push value at back to result
      then push value at front to result
    otherwise
      push value at front to result,
      then push value at back to result
  return result
*/

function arrange(s) {
  const result = [];
  for (let f = 0, b = s.length - 1; f < s.length / 2; f++, b--) {
    if (f === b) result.push(s[f]);
    else if (f % 2) result.push(s[b]), result.push(s[f]);
    else result.push(s[f]), result.push(s[b]);
  }
  return result;
}