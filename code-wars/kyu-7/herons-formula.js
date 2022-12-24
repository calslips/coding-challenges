/*
Write function heron which calculates the area of a triangle
with sides a, b, and c (x, y, z in COBOL).

Heron's formula:

s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)}
s∗(s−a)∗(s−b)∗(s−c)

where

s=a+b+c2s = \frac{a + b + c} 2s=
2
a+b+c

Output should have 2 digits precision.

Parameters: 3 nums
  length of sides of a triangle
Returns: 1 num
  the area of a triangle, rounded to nearest hundredth
Examples:
  heron(3, 4, 5), 6
  heron(6, 8, 10), 24
Pseudocode:
  find value of s
    the sum of all 3 inputs divided by 2
  return result of heron's formula rounded to nearest hundredth
    find sqrt of
    s multiplied by
    s minus a multiplied by
    s minus b multiplied by
    s minus c
*/

function heron(a, b, c) {
  const s = (a + b + c) / 2;
  return +Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
}