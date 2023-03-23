/*
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled.
Maybe you can decipher it?
According to Wikipedia,
ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters.
Not spaces, punctuation, numbers, etc.

Parameters: a str
Returns: a str
  letters rotated by 13, circularly
Examples:
  rot13("EBG13 rknzcyr."), "ROT13 example."
  rot13("This is my first ROT13 excercise!"), "Guvf vf zl svefg EBG13 rkprepvfr!"
Pseudocode:
  initialize a result var assigned to an empty str
  iterate over input str
    (can either reference charcodes or vars containing alphabet chars in order)
    if current char is a lowercased letter
      swap it with the letter 13 places after it (circular)
      concat with result
    otherwise if the current char is an uppercased letter
      swap it with the letter 13 places after it (circular)
      concat with result
    otherwise
      concat char as is with result
  return result
*/

function rot13(str) {
  let result = '';
  for (const char of str) {
    const code = char.charCodeAt();
    if (code > 96 && code < 123) result += String.fromCharCode((code - 97 + 13) % 26 + 97);
    else if (code > 64 && code < 91) result += String.fromCharCode((code - 65 + 13) % 26 + 65);
    else result += char;
  }
  return result;
}