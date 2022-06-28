/*
You are given two strings (st1, st2) as inputs. Your task is to return a
string containing the numbers in st2 which are not in str1. Make sure the
numbers are returned in ascending order. All inputs will be a string of
numbers.

Parameters: 2 strings (represent numbers)
Returns: a string of the numbers contained in the 2nd arg, but not the 1st
Examples:
  findAdded('44554466', '447554466') // '7'
  findAdded('9876521', '9876543211') // '134'
  findAdded('4455446', '447555446666') // '56667'
  findAdded('678', '876') // ''
  findAdded('678', '6') // ''
Pseudocode:
  split both strings into arrays (each element is a single value)
  iterate over the 2nd array
    if the 1st array includes the current element
      remove it from both arrays
      decrement counter (to account for deletion of element)
  sort remaining values in 2nd array from low to high
  join elements of sorted 2nd array into a string
  return sorted string
*/

function findAdded(st1, st2) {
  st1 = [...st1], st2 = [...st2];
  for (let i = 0; i < st2.length; i++) {
    if (st1.includes(st2[i])) {
      st1.splice(st1.indexOf(st2[i]), 1);
      st2.splice(st2.indexOf(st2[i]), 1);
      i--;
    }
  }
  return st2.sort().join('');
}

// function findAdded(st1, st2) {
//   return [...st1].reduce((a, c) => a.replace(c, ''), st2).split('').sort().join('');
// }