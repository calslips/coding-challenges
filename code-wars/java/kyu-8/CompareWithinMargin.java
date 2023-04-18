/*
Create a function close_compare that accepts 3 parameters:
a, b, and an optional margin. The function should return whether
a is lower than, close to, or higher than b.

a is considered "close to" b if margin is greater than or equal
to the distance between a and b.

Please note the following:
  When a is close to b, return 0.
Otherwise...
  When a is less than b, return -1.
  When a is greater than b, return 1.
If margin is not given, treat it as zero.
  Assume: margin >= 0

Tip: Some languages have a way to make parameters optional.

Example 1
If a = 3, b = 5, and margin = 3,
then close_compare(a, b, margin) should return 0.
This is because a and b are no more than 3 numbers apart.

Example 2
If a = 3, b = 5, and margin = 0,
then close_compare(a, b, margin) should return -1.
This is because the distance between a and b is greater than 0,
and a is less than b.

Parameters:
  closeCompare takes in 2 doubles
  closeCompare takes in 3 doubles
Returns: an int
  0 if close
  -1 if less
  1 if greater
Examples:
  Solution.closeCompare(4, 5), -1
  Solution.closeCompare(5, 5), 0
  Solution.closeCompare(6, 5), 1
  Solution.closeCompare(-6, -5), -1
  Solution.closeCompare(2, 5, 3), 0
  Solution.closeCompare(8.1, 5, 3), 1
  Solution.closeCompare(1.99, 5, 3), -1
Pseudocode:
  closeCompare 2 params
    if a is less than b
      return -1
    if a is greater than b
      return 1
    otherwise
      return result of call to close compare with a, b & 0 as args

  closeCompare 3 params
    if a is within margin of b
      return 0
    otherwise
      return result of call to closeCompare with only a & b args
*/

// class named Solution for actual challenge
public class CompareWithinMargin {
  public static int closeCompare(double a, double b) {
    return a < b ? -1 : a > b ? 1 : closeCompare(a, b, 0);
  }

  public static int closeCompare(double a, double b, double margin) {
    return a >= b - margin && a <= b + margin ? 0 : closeCompare(a, b);
  }
}