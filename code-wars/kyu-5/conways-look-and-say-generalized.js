/*
Parameters: num
Returns: a num
  formatted as count-digit from input num
  in order from left to right
Examples:
  lookSay(0), 10
  lookSay(2014), 12101114
  lookSay(1122), 2122
  lookSay(22322), 221322
Pseudocode:
  initialize a count var assigned to 1
  initialize a result var assigned to an empty str
  convert input num to str
  iterate over str num
    if current is the same as next
      increment count by 1
    otherwise
      concat result with count and current
      reassign count to 1
  return result converted to num
*/

function lookSay(number) {
  let result = '', s = `${number}`;
  for (let i = 0, count = 1; i < s.length; i++) s[i] === s[i + 1] ? count++ : (result += count + s[i]) && (count = 1);
  return +result;
}

function lookSay(number) {
  let result = '';
  for (let i = 0, count = 1; i < (strNum = `${number}`).length; i++) strNum[i] === strNum[i + 1] ? count++ : (result += count + strNum[i]) && (count = 1);
  return +result;
}

function lookSay(number) {
  let result = '';
  for (let i = 0, count = 1; i < (strNum = `${number}`).length; i++) {
    if (strNum[i] === strNum[i + 1]) count++;
    else result += count + strNum[i], count = 1;
  }
  return +result;
}