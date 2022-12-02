// Given a string of characters as input,
// write a function that returns it with the characters reversed.
// No Reverse Method (well brute force it first, but then no reverse method)!

// takes in a str, always a str? never undefined, null or another data type?
// returns a str, with the chars order reversed
// NO use of .reverse() arr method

function reverseStr(str) {
  // initialize a reversed var assigned to an empty str
  // iterate over the length of the str from end to start
    // concat reversed with the current char
  // return reversed

  // for loop
  // let reversed = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversed += str[i];
  // }
  // return reversed;

  // methods
  return [...str].reduceRight((r, c) => r + c, '');
}

// examples
console.log(reverseStr('Hello World!'), '!dlroW olleH');
console.log(reverseStr('Blah Blah Blah'), 'hlaB hlaB hlaB');
console.log(reverseStr('12345'), '54321');
console.log(reverseStr(''), '');