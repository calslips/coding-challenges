/*
The most basic encryption method is to map a char to another char by a
certain math rule. Because every char has an ASCII value, we can
manipulate this value with a simple math expression. For example 'a' + 1
would give us 'b', because 'a' value is 97 and 'b' value is 98.

You will need to write a method which does exactly that -
get a string as text and an int as the rule of manipulation, and should
return encrypted text. for example:

encrypt("a",1) = "b"

Full ascii table is used on our question (256 chars) -
so 0-255 are the valid values.

If the value exceeds 255, it should 'wrap'.
ie. if the value is 345 it should wrap to 89.

Parameters:
  a string
    unencrypted text
  a number
    value used to 'encrypt' chars
    by modifying original ascii values with it
Returns:
  a string (encrypted text)
Examples:
  encrypt("", 1) // ""
  encrypt("a", 1) // "b"
  encrypt("please encrypt me", 2), "rngcug\"gpet{rv\"og"
Pseudocode:
  if input string is empty
    return input string as is
  convert input string into an array of chars
  iterate over char array
    swap it with the char from the char code of the original,
    plus the input number modulo'd by 256
  return the modified char array joined on ''
*/

function encrypt(text, rule) {
  return text.split('').map(c => String.fromCharCode((c.charCodeAt() + rule) % 256)).join('');
};

// function encrypt(text, rule) {
//   return text && text.split('').map(c => String.fromCharCode((c.charCodeAt() + rule) % 256)).join('');
// };