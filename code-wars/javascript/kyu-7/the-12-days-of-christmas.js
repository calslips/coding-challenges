/*
Oh No!
The song sheets have been dropped in the snow and the lines of
each verse have become all jumbled up.

Task
You have to write a comparator function which can sort the lines
back into their correct order, otherwise Christmas will be
cancelled!

Reminder: Below is what the final verse should look like

On the 12th day of Christmas my true love gave to me
12 drummers drumming,
11 pipers piping,
10 lords a leaping,
9 ladies dancing,
8 maids a milking,
7 swans a swimming,
6 geese a laying,
5 golden rings,
4 calling birds,
3 French hens,
2 turtle doves and
a partridge in a pear tree.

Parameters: 2 values
Returns: a num
  based on the alphabetical relationship
  between input values
    negative to sort a before b
    0 to keep the same
    positive to sort b before a
Examples: expected sorted result
  "On the 12th day of Christmas my true love gave to me",
  "12 drummers drumming,",
  "11 pipers piping,",
  "10 lords a leaping,",
  "9 ladies dancing,",
  "8 maids a milking,",
  "7 swans a swimming,",
  "6 geese a laying,",
  "5 golden rings,",
  "4 calling birds,",
  "3 French hens,",
  "2 turtle doves and",
  "a partridge in a pear tree."
Pseudocode:
  if str a starts with 'O' return -1
  if str b starts with 'O' return 1
  if str a starts with 'a' return 1
  if str b starts with 'a' return -1
  otherwise
    return parseInt of b minus parseInt of a
*/

const comparator = function(a, b) {
  return a.startsWith('O') || b.startsWith('a') ? -1 : a.startsWith('a') || b.startsWith('O') ? 1 : parseInt(b) - parseInt(a);
}

const comparator = function(a, b) {
  if (a.startsWith('O') || b.startsWith('a')) return -1;
  if (a.startsWith('a') || b.startsWith('O')) return 1;
  return parseInt(b) - parseInt(a);
}