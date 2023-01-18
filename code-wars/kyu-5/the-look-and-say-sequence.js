/*
In mathematics, the look-and-say sequence is the sequence of
integers beginning as follows:

1, 11, 21, 1211, 111221, 312211, …
To generate a member of the sequence from the previous member,
read off the digits of the previous member, counting the number
of digits in groups of the same digit. For example:

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
1211 is read off as "one 1, then one 2, then two 1s" or 111221.
111221 is read off as "three 1s, then two 2s, then one 1" or 312211.
Your mission is to write a function which, given an integer "n" as
parameter, returns a comma separated list of the first "n" terms of
the sequence.
For 0, negative, or NaN parameters, -1 shall be returned.

Parameters: a num
Returns:
  a str
    comma separated nums that
    describe the previous values
    digits in count-digit format
  -1
    if input is 0, neg or NaN
Examples:
  getLines(2), "1,11"
  getLines(3), "1,11,21"
  getLines(5), "1,11,21,1211,111221"
Pseudocode:
  if value is 0, neg or NaN
    return -1
  initialize results var assigned to an array containing 1
  create a loop to run from 1 to input, exclusive
    initialize a result var assigned to an empty str
    take the previous value in results and convert to str
    create an inner loop to run the length of previous str
    create a count var started at 1
      if current value in str is equal to next value in str
        increment count
      otherwise
        concat result with count and current value
        reassign count to 1
    push result to results arr
  return results array converted to str
*/

function getLines(line) {
  if (line < 1 || isNaN(line)) return -1;
  const results = [1];
  for (let i = 1, result = ''; i < line; i++, result = '') {
    for (let j = 0, count = 1, str = `${results[i - 1]}`; j < str.length; j++) {
      str[j] === str[j + 1] ? count++ : (result += count + str[j]) && (count = 1);
    }
    results.push(result);
  }
  return `${results}`;
}