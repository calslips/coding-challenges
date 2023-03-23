/*
Your task is to create a function called addArrays, which
takes two arrays consisting of integers, and returns the
sum of those two arrays.

The twist is that (for example) [3,2,9] does not equal
3 + 2 + 9, it would equal '3' + '2' + '9' converted to an
integer for this kata, meaning it would equal 329. The
output should be an array of the sum in a similar fashion
to the input (for example, if the sum is 341, you would
  return [3,4,1]). Examples are given below of what two
  arrays should return.

[3,2,9],[1,2] --> [3,4,1]
[4,7,3],[1,2,3] --> [5,9,6]
[1],[5,7,6] --> [5,7,7]
If both arrays are empty, return an empty array.

In some cases, there will be an array containing a negative
number as the first index in the array. In this case treat
the whole number as a negative number. See below:

[3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962

Parameters: 2 arrays of nums
Returns: an array of nums
Examples:
  addArrays([6, 7], [6, 7]), [1, 3, 4]
  addArrays([3, 2, 9], [1, 2]), [3, 4, 1]
  addArrays([4, 7, 3], [1, 2, 3]), [5, 9, 6]
  addArrays([1], [5, 7, 6]), [5, 7, 7]
  addArrays([3, 2, 6, 6], [-7, 2, 2, 8]), [-3, 9, 6, 2]
Pseudocode:
  if neither inputs have a length
    return an empty array
  if array 1 has no length
    return array 2
  if array 2 has no length
    return array 1
  initialize num1 var to be arr1 joined into a str of digits
    & converted back into a single num
  initialize num2 var to be arr2 joined into a str of digits
    & converted back into a single num
  obtain the sum of adding num1 & num2
  initialize an isNeg flag assigned to whether sum is neg or pos
  take abs val of sum
    convert to str
    split into an arr of str digits
    convert each str digit into a num
  assign above result to sumArr var
  if isNeg
    reassign the value in sumArr at 0th index to its negative
  return sumArr
*/

function addArrays(array1, array2) {
  if (!array1.length && !array2.length) return [];
  else if (!array1.length) return array2;
  else if (!array2.length) return array1;
  const num1 = +array1.join(''),
        num2 = +array2.join(''),
        sum = num1 + num2,
        isNeg = sum < 0,
        sumArr = [...`${Math.abs(sum)}`].map(e => +e);
  if (isNeg) sumArr[0] *= -1;
  return sumArr;
}