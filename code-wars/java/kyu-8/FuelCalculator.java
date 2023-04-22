/*
In this kata you will have to write a function that takes litres
and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre,
purchases of 4 or more litres get a discount of 10 cents per litre,
and so on every two litres, up to a maximum discount of 25 cents
per litre. But total discount per litre cannot be more than 25 cents.
Return the total cost rounded to 2 decimal places.
Also you can guess that there will not be negative or non-numeric inputs.

Parameters:
  int, litre count
  double, price per litre
Returns: double
Examples:
  Kata.fuelPrice(5, 1.23), 5.65
  Kata.fuelPrice(8, 2.5), 18.4
  Kata.fuelPrice(5, 5.6), 27.5
Pseudocode:
  initialize discount as double with value of 0
  if litre count is greater than or equal to 10
    reassign discount to .25
  if litre count is greater than or equal to 8
    reassign discount to .2
  if litre count is greater than or equal to 6
    reassign discount to .15
  if litre count is greater than or equal to 4
    reassign discount to .1
  if litre count is greater than or equal to 2
    reassign discount to .05
  take price per litre, subtract discount, multiply by litre count
  round to nearest 2 decimals
  return result
*/

// class name was originally Kata
public class FuelCalculator {
  public static double fuelPrice(int litres, double pricePerLitre) {
    double discount = litres >= 10 ? .25 : litres >= 8 ? .2 : litres >= 6 ? .15 : litres >= 4 ? .1 : litres >= 2 ? .05 : 0;
    return (pricePerLitre - discount) * litres;
  }
}