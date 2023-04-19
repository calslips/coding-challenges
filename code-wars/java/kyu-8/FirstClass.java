/*
Vasya Pupkin just started learning Java and C#. At first, he
decided to write simple program that was supposed to sum up two
small numbers (numbers and their sum fit in a byte), but it
didn't work. Vasya was too sad to find out what is wrong. Help
him to correct the mistake.

Parameters: 2 bytes
Returns: a byte
  (the sum of input bytes)
Examples:
  byte a = 1;
  byte b = 2;
  FirstClass.sum(a, b), 3
Pseudocode:
  original
    sum of inputs a and b was stored in c
    then c was returned
  fix
    sum inputs a and b
    then typecast the resulting sum to byte
    then return the byte sum
*/

public class FirstClass {
  public static byte sum (byte a, byte b) {
    return (byte) (a + b);
  }
}