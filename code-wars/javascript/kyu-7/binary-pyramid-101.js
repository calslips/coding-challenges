/*
Given two numbers m and n, such that 0 ≤ m ≤ n :

convert all numbers from m to n (inclusive) to binary
sum them as if they were in base 10
convert the result to binary
return as a string

Example
1, 4  -->  1111010

because:
    1  // 1 in binary is 1
+  10  // 2 in binary is 10
+  11  // 3 in binary is 11
+ 100  // 4 in binary is 100
-----
  122  // 122 in binary is 1111010

Parameters: 2 nums
Returns: a str (binary)
Examples:
  binaryPyramid(1,4), "1111010"
  binaryPyramid(1,6), "101001101"
  binaryPyramid(6,20), "1110010110100011"
  binaryPyramid(21,60), "1100000100010001010100"
Pseudocode:
  initialize a sum var assigned to 0
  create an array containing nums from m to n
  iterate over the array of nums
    convert each num to binary
    add binary num to sum (treat as if base 10)
  convert sum to binary
  return binary sum
*/

function binaryPyramid(m, n) {
  return Array.from({length: n - m + 1}, (_, i) => m + i).reduce((s, n) => s + +n.toString(2), 0).toString(2);
}