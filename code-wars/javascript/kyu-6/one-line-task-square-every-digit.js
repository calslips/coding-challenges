/*
your goal here is precisely the same (to square every digit in
  the given number), in 36 or fewer characters (JavaScript),
  or 47 or fewer in Ruby

(Note: in Ruby, spaces do not count towards your total-- within
  reason. Spacing shouldn't be more than 30% of your total to
  avoid possible cheats).

Your return value should be in integer format.

Your input will always be a valid, non-negative integer...
no tricks!

Bonus: Can you get it down to 34 characters? (43 in Ruby!)

Note: Just as a head's up, numbers are > 2^31, so bitwise
operators aren't viable.

Parameters: a num
Returns: a num
  result of squaring each digit of input num
Examples:
  sd(0), 0
  sd(1111), 1111
  sd(3212), 9414
  sd(2112), 4114
  sd(159), 12581
  sd(77455754), 4949162525492516
  sd(99999999), 8181818181818181
Pseudocode:
  keeping char count 36 or less
  convert input num into a str
  split str into an array
  iterate over each str digit
    multiply the digit by itself (square it)
  join the array of str digits into a single str
  convert str to num
  return num
*/

sd=x=>+[...x+''].map(n=>n*n).join``