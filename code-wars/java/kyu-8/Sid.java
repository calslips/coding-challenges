/*
This kata is about multiplying a given number by eight if it is
an even number and by nine otherwise.

Parameters: an int
Returns: an int
Examples:
  Sid.simpleMultiplication(1), 9
  Sid.simpleMultiplication(3), 27
  Sid.simpleMultiplication(21), 189
  Sid.simpleMultiplication(23), 207
  Sid.simpleMultiplication(2), 16
  Sid.simpleMultiplication(4), 32
  Sid.simpleMultiplication(22), 176
  Sid.simpleMultiplication(26), 208
Pseudocode:
  if input int modulo 2 equals 0 (even)
    return product of input int multiplied by 8
  otherwise (it is odd)
    return product of input int multiplied by 9
*/

public class Sid {
  public static int simpleMultiplication(int n) {
    return n % 2 == 0 ? n * 8 : n * 9;
  }
}