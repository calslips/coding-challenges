/**
 * Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple
of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1


Parameters: two separate numbers
Return:
  1 if the first parameter contains a triple consecutive digit
    AND the second paramater contains a double consecutive occurrence of that same digit
  0 otherwise
Examples:
  tripledouble(10560002, 100) // 1 (triple 0 & double 0)
  tripledouble(1112, 122) // 0 (triple 1 but no double 1)
  tripledouble(3123777312, 312477321) // 1 (triple 7s & double 7s)
Pseudocode:
  convert both numbers to string type
  iterate over the first param
    check to see if the parameter includes a triple occurrence of ANY value
      if it does
        check if second parameter contains a double occurrence of that SAME value
          return 1 if it does
          return 0 if NOT
      return 0 if NOT
 */

function tripledouble(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  for (let i = 0; i < num1.length; i++) {
    if (num1.includes(num1[i].repeat(3)) && num2.includes(num1[i].repeat(2))) return 1
  }
  return 0;
}