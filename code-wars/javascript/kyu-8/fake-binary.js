/**
 * Given a string of digits, you should replace any digit below 5 with '0'
 * and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
 */

function fakeBin(x){
  let bin = '';
  for (let i = 0; i < x.length; i++) {
    x[i] < 5 ? bin += 0 : bin += 1;
  }
  return bin;
}

// const fakeBin = x => x.split('').map(n => n < 5 ? 0 : 1).join('');