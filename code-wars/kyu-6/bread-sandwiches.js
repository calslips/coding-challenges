/*
If you're not familiar with the fantastic culinary delights of the
British Isles you may not know about the bread sandwich.

The idea is very simple - if you have a slice of bread between two
other slices of bread, then it's a bread sandwich. Additionally,
if you have a bread sandwich between two other slices of bread,
you get a bread sandwich sandwich, and so on.

In this kata, we will define the following terms like so:

Sandwich - Two slices of bread which may or may not have a filling
Bread Sandwich - Two slices of bread which contains one slice of
bread in the middle as a filling
You will need to build two functions:

Given the number of slices of bread, return the phrase used to
refer to the sandwich
 2 - 'sandwich'
 5 - 'bread sandwich sandwich'
The reverse function - given the name of the sandwich, return how
many slices of bread there are in the sandwich
'bread sandwich' - 3
'sandwich sandwich' - 4
You should return None/null if there is no input / the input is
invalid / there is no sandwich
Maximum 100 slices of bread


Parameters: a number
Returns: a string or null
  odd number starts with bread
    then for every 2 following becomes sandwich
  even number is sandwich for every 2
  null for anything not a number or less than 2
Examples:
  slicesToName(false) // null
  slicesToName(1) // null
  slicesToName(-2) // null
  slicesToName('bread') // null
  slicesToName(2) // 'sandwich'
  slicesToName(3) // 'bread sandwich'
  slicesToName(11) // 'bread sandwich sandwich sandwich sandwich sandwich'
  slicesToName(8) // 'sandwich sandwich sandwich sandwich'
Pseudocode:
  if input is not a number OR less than 2
    return null
  if input is odd
    return 'bread' concatenated with 'sandwich' repeated n / 2 rounded down, times
  if input is even
    return 'sandwich' repeated n / 2, times
*/

function slicesToName(n) {
  if (isNaN(n) || n < 2) return null;
  return n % 2 ? `bread${' sandwich'.repeat(n / 2)}` : ' sandwich'.repeat(n / 2).slice(1);
}

/*
Parameters: a string
Returns: a number
  the number of bread slices based on the string
Examples:
  nameToSlices(12) // null
  nameToSlices('') // null
  nameToSlices('sandwich sandwich bread sandwich') // null
  nameToSlices('sand wich') // null
  nameToSlices('bread sandwich') // 3
  nameToSlices('sandwich sandwich sandwich sandwich') // 8
  nameToSlices('bread') // null
  nameToSlices('bread sandwich sandwich sandwich') // 7
  nameToSlices('bread sandwich bread sandwich') // null
Pseudocode:
  if input is not a string,
  or 'bread' appears anywhere but the 1st word,
  or does not include 'sandwich'
    return null
  convert input into an array,
    reduce array into singular number value
    (bread is worth 1, sandwich is worth 2)
  return reduced number
*/

function nameToSlices(name) {
  if (typeof name !== 'string' || name.lastIndexOf('bread') > 0 || !name.includes('sandwich')) return null;
  return name.split(' ').reduce((n, s) => s === 'bread' ? ++n : s === 'sandwich' ? n += 2 : n, null);
}