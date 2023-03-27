/*
Parameters: a num
  amount of pies to bake
Returns: a num
  amount of pies each sib gets after evenly
  dividing the input * 10 surplus among them,
  whole nums only
Examples:
  esperanzasPies(1), 1
  esperanzasPies(2), 2
  esperanzasPies(3), 3
  esperanzasPies(4), 5
  esperanzasPies(5), 6
Pseudocode
  multiply input by 10 and divide by 8
  OR divide input by 8 divided by 10
    (maintain a factor of 10 difference between
    dividend and divisor)
  return the int portion
    (keep char count below 25)
*/

esperanzasPies=t=>t/.8|0