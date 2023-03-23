/*
A simple substitution cipher replaces one character from an alphabet with
a character from an alternate alphabet, where each character's position in
an alphabet is mapped to the alternate alphabet for encoding or decoding.
If a character provided is not in the opposing alphabet,
simply leave it as be.

Parameters:
  constructor takes 2 args: each a string
    an alphabet and an alternate alphabet
  the encode method: takes a string
    converts characters from alphabet to alternate alphabet
  the decode method: takes a string
    converts characters from alternate alphabet to alphabet
Returns:
  encode method
    returns input string encoded from alphabet to alternate alphabet
  decode method
    returns input strind decoded from alternate alhpabet to alphabet
Examples:
  var abc1 = "abcdefghijklmnopqrstuvwxyz";
  var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

  var sub = new SubstitutionCipher(abc1, abc2);
  sub.encode("abc") // => "eta"
  sub.encode("xyz") // => "qxz"
  sub.encode("aeiou") // => "eirfg"

  sub.decode("eta") // => "abc"
  sub.decode("qxz") // => "xyz"
  sub.decode("eirfg") // => "aeiou"
Pseudocode:
  encode
    convert input string into an array (each element a letter)
    iterate over string array
      find index of current letter in alphabet
      replace with letter at same index in alternate alphabet
        if it doesn't exist
          keep original letter
    return encoded array converted to string

  decode
    convert input string into an array (each element a letter)
    iterate over the string array
      find index of current letter in alternate alphabet
      replace with letter at same index in alphabet
        if it doesn't exist
          keep original letter
    return encoded array converted to string
*/

function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    return [...str].map(l => abc2[abc1.indexOf(l)] || l).join('');
  }
  this.decode = function (str) {
    return [...str].map(l => abc1[abc2.indexOf(l)] || l).join('');
  }
}