/*
This cipher involves taking each character of a string and
multiplying their char codes by 6.

For example, `Hello World!` would become `ưɞʈʈʚÀȊʚʬʈɘÆ`.

You must write two functions:
`encode` to encode a given string,
`decode` to decode a given string.

Parameters: a str
Returns: a str
  encode takes charcode of char and replaces
    it with char found at charcode * 6
  decode takes charcode of char and replaces
    it with char found at charcode / 6
Examples:
  encode("Hello World!"), "ưɞʈʈʚÀȊʚʬʈɘÆ"
  decode("ưɞʈʈʚÀȊʚʬʈɘÆ"), "Hello World!"
Pseudocode:
  encode
    iterate over input str
      get charcode of current char & multiply by 6
      replace with char at product charcode

  decode
    iterate over input str
      get charcode of current char & divide by 6
      replace with char at quotient charcode
*/

function encode(str) {
  return [...str].reduce((s, c) => s + String.fromCharCode(c.charCodeAt() * 6), '');
}

function decode(str) {
  return [...str].reduce((s, c) => s + String.fromCharCode(c.charCodeAt() / 6), '');
}