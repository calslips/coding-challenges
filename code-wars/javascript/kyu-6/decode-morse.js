/*
That's right: your job is to implement a decoder for the Morse alphabet.
Rather than dealing with actual beeps, we will use a common string
encoding of Morse. A long beep is represened by a dash (-) and a short
beep by a dot (.). A series of long and short beeps make up a letter, and
letters are separated by spaces ( ). Words are separated by double spaces.

You should implement the International Morse Alphabet.
You need to support letters a-z and digits 0-9 as follows:

a .-      h ....    o ---     u ..-      1 .----     6 -....
b -...    i ..      p .--.    v ...-     2 ..---     7 --...
c -.-.    j .---    q --.-    w .--      3 ...--     8 ---..
d -..     k -.-     r .-.     x -..-     4 ....-     9 ----.
e .       l .-..    s ...     y -.--     5 .....     0 -----
f ..-.    m --      t -       z --..
g --.     n -.

Parameters: a string
  made up of dots, dashes, and spaces
Returns: a string
  the input morse string decoded
Examples:
  decode(".... . .-.. .-.. ---  .-- --- .-. .-.. -..")
    // "hello world"
  decode(".---- ... -  .- -. -..  ..--- -. -.. ")
    // "1st and 2nd"
Pseudocode:
  if input is an empty string,
    return empty string
  initialize a map variable assigned to an object
    where each char/num (value) is mapped to its morse equivalent (key)
  split the input morse string into an array of morse chars
  map over the morse array
    replace each morse element with its char/num equivalent from map
    or a space (for actual spaces)
  return morse array joined on each char
*/

function decode(str) {
  const map = {
    '.-':   'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..':  'd',
    '.':    'e',
    '..-.': 'f',
    '--.':  'g',
    '....': 'h',
    '..':   'i',
    '.---': 'j',
    '-.-':  'k',
    '.-..': 'l',
    '--':   'm',
    '-.':   'n',
    '---':  'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.':  'r',
    '...':  's',
    '-':    't',
    '..-':  'u',
    '...-': 'v',
    '.--':  'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': 1,
    '..---': 2,
    '...--': 3,
    '....-': 4,
    '.....': 5,
    '-....': 6,
    '--...': 7,
    '---..': 8,
    '----.': 9,
    '-----': 0,
  }
  return str ? str.split(' ').map(k => k ? map[k] : ' ').join('') : str;
}