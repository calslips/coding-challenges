/*
Given an unsorted array of 3 positive integers [ n1, n2, n3 ],
determine if it is possible to form a Pythagorean Triple using
those 3 integers.

A Pythagorean Triple consists of arranging 3 integers, such that:
a^2 + b^2 = c^2

Examples
[5, 3, 4] : it is possible to form a Pythagorean Triple using
  these 3 integers: 3^2 + 4^2 = 5^2
[3, 4, 5] : it is possible to form a Pythagorean Triple using
  these 3 integers: 3^2 + 4^2 = 5^2
[13, 12, 5] : it is possible to form a Pythagorean Triple using
  these 3 integers: 5^2 + 12^2 = 13^2
[100, 3, 999] : it is NOT possible to form a Pythagorean Triple
  using these 3 integers - no matter how you arrange them,
  you will never find a way to satisfy the equation a2 + b2 = c2

Return Values
For Python: return True or False
For JavaScript: return true or false
Other languages: return 1 or 0 or refer to Sample Tests.

Parameters: an array containing 3 ints
Returns: an int
  1 if array contains valid pythagorean triple
  0 if it does NOT
Examples:
  PythagoreanTriple pT = new PythagoreanTriple();

  int[] p1 = {3, 4, 5};
  pT.pythagoreanTriple(p1), 1

  int[] p2 = {3, 5, 7};
  pT.pythagoreanTriple(p2), 0
Pseudocode:
  sort input array
  if 1st value squared plus 2nd value squared equals 3rd value squared
    return 1
  otherwise
    return 0
*/

import java.util.Arrays;

public class PythagoreanTriple {
	public int pythagoreanTriple(int[] triple) {
    Arrays.sort(triple);
    return Math.sqrt(Math.pow(triple[0], 2) + Math.pow(triple[1], 2)) == triple[2] ? 1 : 0;
  }
}