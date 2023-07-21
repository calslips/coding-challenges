/*
When I was a kid, there was a time when I thought that raising a
to the bth power worked differently. For example, to calculate 2^3,
I'd think "Okay, 2^2=2*2=4, so 2^3=4*4=16" If I was doing 3^4,
I'd do: 3*3=9 9*9=81 81*81=6561

So, given two BigIntegers, raise a to the bth power the same way
I used to. If the power is less than 1, return -1 as a BigInteger.

Parameters: 2 BigIntegers
Returns: a BigInteger
Examples:
  KidMath.pow(new BigInteger("-1"), new BigInteger("-1")),
    new BigInteger("-1")
  KidMath.pow(new BigInteger("2"), new BigInteger("-1")),
    new BigInteger("-1")
  KidMath.pow(new BigInteger("2"), new BigInteger("2")),
    new BigInteger("4")
  KidMath.pow(new BigInteger("3"), new BigInteger("3")),
    new BigInteger("81")
Pseudocode:
  (all numeric values to be of type BigInteger)
  if the exponent input is less than 1
    return -1
  create a loop to run from 1 to the exponent input (exclusive)
  increment counter by 1 each iteration
    reassign base input to equal itself times itself
  return base
*/

import java.math.BigInteger;

class KidMath {
  public static BigInteger pow(BigInteger base, BigInteger exponent) {
    BigInteger one = new BigInteger("1");
    if (exponent.compareTo(one) == -1) return one.negate();
    for (BigInteger i = one; i.compareTo(exponent) < 0; i = i.add(one)) {
      base = base.multiply(base);
    }
    return base;
  }
}