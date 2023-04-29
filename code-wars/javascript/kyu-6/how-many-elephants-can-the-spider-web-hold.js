/*
How many elephants can the spider web hold?

Imagine a spider web that is defined by two variables:

strength, measured as the weight in kilograms that surely breaks
  the web
length, measured as the number of elephants that fit one after
  the other on the web :)
Paraphrasing the song "One elephant went out to play", how many
  elephants will the web hold if we put them one after the other,
  without breaking?

You must take into account two things:

elephants like to create super high pyramids, so, on each level
of the structure fits one elephant less than in the previous one.

elephants sitting on the first row weigh 1000 kg, the ones
sitting on the second row weigh 2000 kg, and so on. When rows
are full of elephants, next elephants go up one level, and weigh
1000 kg more than the previous ones.
Have fun!

Notes:
check all the possible values for the input parameters,
even absurd ones

Parameters:
  a num, max weight capacity
  a num, max num of elepthants that fit across web
Returns: a num
  the max num of elepthants a web can hold
Examples:
  breakTheWeb(9200, 12), 9
  breakTheWeb(9200, 3), 5
Pseudocode:
  initialize a loop
  define counter to equal 0
  define row to equal 1
  define row counter to count elephants on specific row to equal 0
  run as long as difference between weight and strength is non neg
  increment counter
  increment row counter
  if row counter modulo width is 0, increment row, decrement width, zero row count
    initialize difference var assigned to strength minus 1000 times row
    if difference is less than 0 or width is less than 1
      return counter
    otherwise
      reassign strength to equal itself minus 1000 times row
*/

function breakTheWeb(strength, width) {
  for (let i = 0, row = 1, j = 0; ; i++, j++, !(j % width) && row++ && width-- && (j = 0)) {
    if ((strength -= 1000 * row) < 0 || width < 1) return i;
  }
}