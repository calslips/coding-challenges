/*
Make a function that receives a value, val and outputs the
smallest higher number than the given value, and this number
belong to a set of positive integers that have the following
properties:

their digits occur only once
they are odd
they are multiple of three

nextNumb(12) == 15
nextNumb(13) == 15
nextNumb(99) == 105
nextNumb(999999) == 1023459
nextNumber(9999999999) == "There is no possible number that
fulfills those requirements"

Parameters: a num
Returns:
  a num
    next higher num from input
    digits only occur once
    is odd
    is a multiple of 3
  a str
    when the above cases are not true
Examples:
  nextNumb(12), 15
  nextNumb(13), 15
  nextNumb(99), 105
  nextNumb(999999), 1023459
  nextNumb(9999999999), "There is no possible number that fulfills those requirements"
Pseudocode:
  iterate from input num + 1 to num less than 9 digits
  (tests only go up to 8 digits. If it went higher,
  anything that was a number long enough to repeat values
  (i.e. greater than 10 digits) or greater than the value
  of 9876543210 would bust the reqs)
    initialize noDupes var assigned to counter num to str to set to arr to str to num
    if counter equals no dupes
    AND if input is odd
    AND if input is divisible by 3
      return counter
  return 'There is no possible number that fulfills those requirements'
*/

function nextNumb(val) {
  for (let i = val + 1; i < 100000000; i++) if (i === +[...new Set(`${i}`)].join('') && i % 2 && !(i % 3)) return i;
  return 'There is no possible number that fulfills those requirements';
}

function nextNumb(val) {
  for (let i = val + 1; i < 100000000; i++) {
    const noDupes = +[...new Set(`${i}`)].join('');
    if (i === noDupes && i % 2 && !(i % 3)) return i;
  }
  return 'There is no possible number that fulfills those requirements';
}