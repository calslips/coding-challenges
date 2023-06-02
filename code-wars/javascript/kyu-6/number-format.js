/*
Format any integer provided into a string with "," (commas)
in the correct places.

Parameters: a num
Returns: a str
  num formatted with commas
Examples:
  numberFormat(100000), '100,000'
  numberFormat(5678545), '5,678,545'
  numberFormat(-420902), '-420,902'
Pseudocode:
  get abs value of input num
  convert abs value to str
  iterate over the string starting from the right
    for every 3 places
      concat a comma
  if original num was neg
    concat a '-' to the left of formatted str
  return formatted str
*/

const numberFormat = n => {
  let nStr = `${Math.abs(n)}`;
  for (let i = nStr.length - 3; i > 0; i -= 3) nStr = nStr.slice(0, i) + ',' + nStr.slice(i);
  return (Math.sign(n) < 0 ? '-' : '') + nStr;
};