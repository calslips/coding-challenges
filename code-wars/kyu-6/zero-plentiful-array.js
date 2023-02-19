/*
An array is called zero-plentiful if it contains multiple zeros,
and every sequence of zeros is at least 4 items long.

Your task is to return the number of zero sequences if the given
array is zero-plentiful, oherwise 0.

Examples
[0, 0, 0, 0, 0, 1]  -->  1
# 1 group of 5 zeros (>= 4), thus the result is 1

[0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
# 2 group of 4 zeros (>= 4), thus the result is 2

[0, 0, 0, 0, 1, 0]  -->  0
# 1 group of 4 zeros and 1 group of 1 zero (< 4)
# _every_ sequence of zeros must be at least 4 long,
  thus the result is 0

[0, 0, 0, 1, 0, 0]  -->  0
# 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

[1, 2, 3, 4, 5]  -->  0
# no zeros

[]  -->  0
# no zeros

Parameters: an array of nums
Returns: a num
  the count when every sequence of zeros >= 4
  otherwise 0
Examples:
  zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0]), 0
  zeroPlentiful([3]), 0
  zeroPlentiful([0, 0, 0, 0, 0, 0]), 1
  zeroPlentiful([0, 2, 19, 4, 4]), 0
  zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0]), 2
  zeroPlentiful([-3, 2, 1, 3, -1, -2]), 0
  zeroPlentiful([1000, 0, 1, 0, 0, 0, 0]), 0
  zeroPlentiful([10, 0, 0, 0]), 0
  zeroPlentiful([]), 0
Pseudocode:
  initialize count var assigned to 0
  initialize zeros var assigned to an empty str
  iterate over the input array
    if current is 0
      concat with zeros
    if current is NOT 0 and zeros is empty
      continue
    if current is NOT 0 OR we are at the last el of arr
      if 0 < zeros length < 4
        return 0
      otherwise if current is NOT 0 and zeros length >= 4
        increment count by 1
        reassign zeros to empty str
  return count;
*/

function zeroPlentiful(arr) {
  let count = 0, zeros = '';
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) zeros += arr[i];
    if ((arr[i] || i + 1 === arr.length) && zeros) {
      if (zeros.length < 4) return 0;
      count++, zeros = '';
    }
  }
  return count;
}