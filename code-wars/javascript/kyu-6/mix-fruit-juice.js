/*
Jumbo Juice makes a fresh juice out of fruits of your choice.Jumbo Juice
charges $5 for regular fruits and $7 for special ones. Regular fruits are
Banana, Orange, Apple, Lemon and Grapes. Special ones are Avocado, Strawberry
and Mango. Others fruits that are not listed are also available upon request.
Those extra special fruits cost $9 per each. There is no limit on how many fruits
she/he picks.The price of a cup of juice is the mean of price of chosen fruits.
In case of decimal number (ex. $5.99), output should be the nearest integer
(use the standard rounding function of your language of choice).

Input
The function will receive an array of strings, each with the name of a fruit.
The recognition of names should be case insensitive. There is no case of an empty array input.

Example
['Mango', 'Banana', 'Avocado'] //the price of this juice bottle is (7+5+7)/3 = $6($6.333333...)


Parameters: an array of strings that represent fruits
Returns: average cost of fruits used in juice
  regular fruits: $5 (banana, orange, apple, lemon, grapes)
  special fruits: $7 (avocado, strawberry, mango)
  unlisted fruits: $9 (any fruit not listed above)
Examples:
  mixFruit(['banana','mango','avocado']) // 6
  mixFruit(['watermelon','cherry','avocado']) // 8
  mixFruit(['BlACKbeRrY','cOcONuT','avoCaDo']) // 8
Pseudocode:
  reduce array of fruits, initialize sum accumulator at 0
    initialize cost variable to store cost of current fruit
    cross check current fruit name lower cased against switch statement containing price difference according to fruit
    assign cost to case value
    return cost added to cumulative sum
  divide completed sum by length of input array
  round and return averaged cost
*/

function mixFruit(arr) {
  return Math.round(
    arr.reduce((s, f) => {
      let cost;
      switch(f.toLowerCase()) {
        case 'banana':
        case 'orange':
        case 'apple':
        case 'lemon':
        case 'grapes':
          cost = 5;
          break;
        case 'avocado':
        case 'strawberry':
        case 'mango':
          cost = 7;
          break;
        default:
          cost = 9;
      }
      return s + cost;
    }, 0) / arr.length
  );
}
