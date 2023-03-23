/*
You just got done with your set at the gym, and you are wondering
how much weight you could lift if you did a single repetition.
Thankfully, a few scholars have devised formulas for this purpose
(from Wikipedia) :

Epley
1 RM = w(1 + r/30)
​
McGlothin
1 RM = 100w / (101.3 − 2.67123r)
​
Lombardi
1 RM = wr^0.10

Your function will receive a weight w and a number of repetitions
r and must return your projected one repetition maximum. Since you
are not sure which formula to use and you are feeling confident,
your function will return the largest value from the three formulas
shown above, rounded to the nearest integer. However, if the number
of repetitions passed in is 1 (i.e., it is already a one rep max),
your function must return w. Also, if the number of repetitions
passed in is 0 (i.e., no repetitions were completed), your function
must return 0.

Parameters: 2 numbers
Returns: a number (rounded to nearest int)
  if r is 1, return w as is
  if r is 0, return 0
  otherwise return the largest of 3 1rm calcs
Examples:
  calculate1RM(135, 20) // 282
  calculate1RM(200, 8) // 253
  calculate1RM(270, 2) // 289
  calculate1RM(360, 1) // 360
  calculate1RM(400, 0) // 0
Pseudocode:
  if r input is 0
    return 0
  if r input is 1
    return w
  otherwise
    initialize epley var assigned to result of formula rounded
    initialize mcglothin var assigned to result of formula rounded
    initialize lombardi var assigned to result of formula rounded
    find the highest of 3 results
    return the highest
*/

function calculate1RM(w, r) {
  return !r ? r : r === 1 ? w : Math.round(Math.max(w * (1 + r / 30), 100 * w / (101.3 - 2.67123 * r), w * r ** 0.1));
}