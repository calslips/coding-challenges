/*
Christmas is coming soon. As a programmer, you need to complete
a series of tasks to welcome the arrival of Christmas.
This time your task is:

Given a string s. You need to count how many pairs of two words
"Merry" and "Christmas" appear in s, return the maximum possible
numbers of pair(not the numbers of single word). For example:

merryChristmas("MerryChristmas") === 1  //1 pair
merryChristmas("ChristmasMerry") === 1  //1 pair
merryChristmas("yrreMsamtsirhC") === 1  //1 pair
merryChristmas("MerryMerry") === 0  //no pair
merryChristmas("ChristmasChristmas") === 0  //no pair
merryChristmas("MMeerrrryyCChhrriissttmmaass") === 2  //2 pair
merryChristmas("MMmmeerrrrrryyCChhiissssttaa") === 2  //2 pair
merryChristmas("MMmmeerrrryyCChhiissssssttaa") === 1  //1 pair

Note:
Letters should be case sensitive. "M" and "m" are different ;-)
You don't need to consider the order, the characters are disorganized.

Parameters: a str
Returns: a num
Examples:
  merryChristmas("MerryChristmas"), 1
  merryChristmas("ChristmasMerry"), 1
  merryChristmas("yrreMsamtsirhC"), 1
  merryChristmas("MerryMerry"), 0
  merryChristmas("ChristmasChristmas"), 0
  merryChristmas("MMeerrrryyCChhrriissttmmaass"), 2
  merryChristmas("MMmmeerrrrrryyCChhiissssttaa"), 2
  merryChristmas("MMmmeerrrryyCChhiissssssttaa"), 1
Pseudocode:
  create a base hash to contain
    the letters of 'MerryChristmas' as keys
    and their respective count as values
  create an input hash to contain
    its letters as keys
    and their respective count as values
  initialize a lowest count variable as infinity
  iterate over the keys of the base hash
    divide value of current key in input hash by value of current key in base hash
    if quotient is NaN
      reassign lowest count to NaN
      break out of loop
    round quotient down
    if rounded quotient is less than lowest count
      reassign lowest count to rounded quotient
  return lowest count
*/

function merryChristmas(s) {
  const [baseMap, inputMap] = ['MerryChristmas', s].map(e => [...e].reduce((o, k) => (o[k] = ++o[k] || 1, o), {}));
  let minPair = Number.MAX_VALUE;
  for (const key in baseMap) {
    const pairCount = Math.floor(inputMap[key] / baseMap[key]) || 0;
    if (pairCount < minPair) minPair = pairCount;
    if (!minPair) break;
  }
  return minPair;
}