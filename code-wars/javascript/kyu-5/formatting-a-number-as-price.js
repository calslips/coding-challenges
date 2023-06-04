/*
Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51

Numbers should use the standard comma for every 3 numbers and dot to separate
the cents, cents need to be truncated to 2 decimals, in the case that the
decimal part of the number is 1 character long or none you should add 0's so
that the result will always have 2 decimal characters, the function will also
evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number

Parameters: a num
Returns: a str
Examples:
  numberToPrice(1500.129),   '1,500.12');
  numberToPrice(-5),         '-5.00');
  numberToPrice(1000000.5),  '1,000,000.50');
  numberToPrice('@'),        'NaN'
Pseudocode:
  if input is NaN
    return str 'NaN'
  convert input num to str
  split num on '.'
  if length after split is 1
    return num str with added commas concatted with '.00' concatted
  otherwise
    if 2nd part of split has a length of 1
      return 1st part with added commas concatted with 2nd part concatted with '0'
    otherwise
      return 1st part with added commas concatted with 2nd part sliced from 0 to 2
*/

const numberToPrice = n => n * 1 ? `${(+(p = `${n}`.split('.'))[0]).toLocaleString()}.${((p[1] || '') + '00').slice(0, 2)}` : 'NaN';

const numberToPrice = n => {
  if (typeof n !== 'number') return 'NaN'
  const [int, dec] = `${n}`.split('.');
  return `${(+int).toLocaleString()}.${((dec || '') + '00').slice(0, 2)}`;
};

const numberToPrice = n => {
  if (typeof n !== 'number') return 'NaN'
  const [int, dec] = `${n}`.split('.');
  if (!dec) return n.toLocaleString() + '.00';
  if (dec.length === 1) return Number(int).toLocaleString() + '.' + dec + '0';
  return Number(int).toLocaleString() + '.' + dec.slice(0, 2);
};