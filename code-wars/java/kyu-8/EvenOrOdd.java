/*
Create a function that takes an integer as an argument and
returns "Even" for even numbers or "Odd" for odd numbers.

Parameters: an int
Returns: a str
  "Even" if input is even
  "Odd" if input is odd
Examples:
  EvenOrOdd eoo = new EvenOrOdd();
  eoo.even_or_odd(6), "Even"
  eoo.even_or_odd(7), "Odd"
  eoo.even_or_odd(0), "Even"
  eoo.even_or_odd(-1), "Odd"
Pseudocode:
  if input int modulo 2 equals 0
    return "Even"
  otherwise
    return "Odd"
*/

public class EvenOrOdd {
  public static String even_or_odd(int number) {
    if (number % 2 == 0) return "Even";
    return "Odd";
  }
}