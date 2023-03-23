/*
The look and say sequence is a sequence in which each number is
the result of a "look and say" operation on the previous element.

Considering for example the classical version startin with "1":
["1", "11", "21, "1211", "111221", ...]. You can see that the
second element describes the first as "1(times number)1", the
third is "2(times number)1" describing the second, the fourth is
"1(times number)2(and)1(times number)1" and so on.

Your goal is to create a function which takes a starting string
(not necessarily the classical "1", much less a single character
start) and return the nth element of the series.

Trivia: "22" is the only element that can keep the series constant.

Parameters:
  a str
    starting element
  a num
    position of element to return
    from the look and say sequence
Returns: a str
  str found within seq at nth (num input) position
Examples:
  lookAndSaySequence("1", 1), "1"
  lookAndSaySequence("1", 3), "21"
  lookAndSaySequence("1", 5), "111221"
  lookAndSaySequence("22", 10), "22"
  lookAndSaySequence("14", 2), "1114"
Pseudocode:
  if str input equals "22"
    return "22"
  initialize a results array containing str input
  create a loop to run from 0 to input num (n), exclusive
  initialize result var assigned to any empty str
    (reset to empty str after each iteration)
  initialize str to equal last value of results array
    create inner loop to run the length of str
    initialize count var assigned to 1
      if current char equals next char
        increment count
      otherwise
        concat result with count and current char
        reassign count to 0
    push result str to results array
  return str found at nth (n - 1) position in results array
*/

function lookAndSaySequence(firstElement, n) {
  if (firstElement === '22') return '22';
  const results = [firstElement];
  for (let i = 0, result = ''; i < n; i++, result = '') {
    for (let j = 0, count = 1, str = results[i]; j < str.length; j++) {
      str[j] === str[j + 1] ? count++ : (result += count + str[j]) && (count = 1);
    }
    results.push(result);
  }
  return results[--n];
}