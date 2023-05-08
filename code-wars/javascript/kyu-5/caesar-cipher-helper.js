/*
Write a class that, when given a string, will return an
uppercase string with each letter shifted forward in the
alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5);
  // creates a CipherHelper with a shift of five
c.encode('Codewars');
  // returns 'HTIJBFWX'
c.decode('BFKKQJX');
  // returns 'WAFFLES'

If something in the string is not in the alphabet
(e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].

Parameters:
  constructor takes in a num
  encode method takes in a str
  decode method takes in a str
Returns:
  encode method returns a str all caps
  decode method returns a str all caps
Examples:
  const c = new CaesarCipher(5);
  c.encode('Codewars'), 'HTIJBFWX'
  c.decode('BFKKQJX'), 'WAFFLES'
Pseudocode:
  define class CaesarCipher
    constructor handles shift assignment
    define encode method, takes in a str
      initialize encoded var as empty str
      convert input str to all uppercase
      iterate over the uppercase'd str
        if current char code is between 65-90
          add shift to current char code and get the char it represents
            by getting the remainder of new char code / 91 and adding 65
          concat encoded with new char
        otherwise
          concat encoded with original char
      return encoded str
    define decode method, takes in a str
      initialize decoded var as empty str
      iterate over the uppercase'd str
        if current char code is between 65-90
          subtract shift from current char code
          if new char code is less than 65
            reassign new char code to equal 91 - difference b/w 65 and old code
          concat decoded with new char
        otherwise
          concat decoded with original char
      return decoded str
*/

class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
  }
  encode(str) {
    let encoded = '';
    str = str.toUpperCase();
    for (const char of str) {
      let code = char.charCodeAt();
      if (code > 64 && code < 91) encoded += String.fromCharCode((code += this.shift) > 90 ? code % 91 + 65 : code);
      else encoded += char;
    }
    return encoded;
  }
  decode(str) {
    let decoded = '';
    str = str.toUpperCase();
    for (const char of str) {
      let code = char.charCodeAt();
      if (code > 64 && code < 91) decoded += String.fromCharCode((code -= this.shift) < 65 ? code - 65 + 91 : code);
      else decoded += char;
    }
    return decoded;
  }
}