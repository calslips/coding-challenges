/*
There is a planet... in a galaxy far far away. It is exactly like our
planet, but it has one difference: #The values of the digits 3 and 7
are twisted. Our 3 means 7 on the planet Twisted-3-7. And 7 means 3.

Your task is to create a method, that can sort an array the way it
would be sorted on Twisted-3-7.

7 Examples from a friend from Twisted-3-7:
[1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
[12,13,14] -> [12,14,13]
[9,2,4,7,3] -> [2,7,4,3,9]

There is no need for a precheck. The array will always be not null
and will always contain at least one number.

You should not modify the input array!

Parameters: an array of numbers
Returns: an array of sorted numbers,
  where 3 is valued as 7 and 7 is valued as 3
Examples:
  sortTwisted37([1,2,3,4,5,6,7,8,9]) // [1,2,7,4,5,6,3,8,9]
  sortTwisted37([12,13,14]) // [12,14,13]
  sortTwisted37([9,2,4,7,3]) // [2,7,4,3,9]
Pseudocode:
  sort a copy of the input array
    within the sort function
    convert a & b to string
    if a OR b includes 3 OR 7
      split string on each digit and iterate over the array
      (for both or do checks to determine which string needs it)
        if current num is 3, replace with 7
        else if current num is 7, replace with 3
      join the array(s) and convert to number
    return a - b
*/

function sortTwisted37(array) {
  return array.slice().sort((a, b) => {
    a = a.toString(), b = b.toString();
    if (a.includes('3') || a.includes('7') || b.includes('3') || b.includes('7')) {
      [a, b] = [a, b].map(s => +s.split('').map(d => d === '3' ? '7' : d === '7' ? '3' : d).join(''));
    }
    return a - b;
  });
}

// function sortTwisted37(array) {
//   return array.slice().sort((a, b) => {
//     a = a.toString(), b = b.toString();
//     const aHas = a.includes('3') || a.includes('7'), bHas = b.includes('3') || b.includes('7');
//     if (aHas || bHas) {
//       aHas && (a = +a.split('').map(d => d === '3' ? '7' : d === '7' ? '3' : d).join(''));
//       bHas && (b = +b.split('').map(d => d === '3' ? '7' : d === '7' ? '3' : d).join(''));
//     }
//     return a - b;
//   });
// }