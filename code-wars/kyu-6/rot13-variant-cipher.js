/*
You have been recruited by an unknown organization for your
cipher encrypting/decrypting skills.
Being new to the organization they decide to test your skills.
Your first test is to write an algorithm that encrypts the
given string in the following steps.

The first step of the encryption is a standard ROT13 cipher.
This is a special case of the caesar cipher where the letter
is encrypted with its key that is thirteen letters down the
alphabet,
i.e. A => N, B => O, C => P, etc..

Part two of the encryption is to take the ROT13 output and
replace each letter with its exact opposite.
A => Z, B => Y, C => X.
The return value of this should be the encrypted message.

Do not worry about capitalization or punctuation. All encrypted
messages should be lower case and punctuation free.
As an example, the string "welcome to our organization" should
return "qibkyai ty ysv yvgmzenmteyz".

Parameters: a string (only lowercased letters)
Returns: a string
  input encrypted, 1st using ROT13 cipher,
  then with its exact opposite
Examples:
  encrypter("amz") // "man"
  encrypter("welcome to the organization")
    // "qibkyai ty tfi yvgmzenmteyz"
  encrypter("hello") // "fibby"
  encrypter("my name is") // "ao zmai eu"
  encrypter("goodbye") // "gyyjloi"
Pseudocode:
  initialize result var assigned to empty str
  initialize alphabet var assigned to alphabet str
  initialize front var to be the 1st half of alphabet
  initialize back var to be the 2nd half of alphabet reversed
  iterate over the chars of the input
    if current is a space
      concat space with result
      continue to next iteration
    otherwise
      swap current with char 13 letters down the alphabet (circular)
      check if swapped char exists in first half of alphabet
        if it does,
          get its index and replace it with the char in back
          at the same index & concat with result
        otherwise
          get its index from back and replace it with the char
          in front at the same index & concat with result
  return result
*/

function encrypter(string) {
  let a = 'abcdefghijklmnopqrstuvwxyz',
      f = a.slice(0, a.length / 2),
      b = [...a.slice(a.length / 2)].reverse().join(''),
      r = '';
  for (let c of string) {
    if (c === ' ') r += ' ';
    else {
      let s = a[(a.indexOf(c) + 13) % 26];
      f.includes(s) ? r += b[f.indexOf(s)] : r += f[b.indexOf(s)];
    }
  }
  return r;
}