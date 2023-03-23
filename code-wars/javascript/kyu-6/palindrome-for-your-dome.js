/*
A palindrome is a word, phrase, number, or other sequence of
symbols or elements, whose meaning may be interpreted the same
way in either forward or reverse direction. Famous examples
include "Amore, Roma", "A man, a plan, a canal: Panama" and
"No 'x' in 'Nixon'". - wikipedia

Our goal is to determine whether or not a given string is a
valid palindrome or not.

Like the above examples, here are a few test cases which are
also populated:

"Amore, Roma" => valid
"A man, a plan, a canal: Panama" => valid
"No 'x' in 'Nixon'" => valid
"Abba Zabba, you're my only friend" => invalid
You can see that they are case insensitive and disregards non
alphanumeric characters. In addition to a few predefined tests,
your function will also be tested against a random string
generator 50 times which are guaranteed to produce valid
palindromes.

Notes:
reverse/reverse! have been disabled for String/Array and reverse() for JS.
reverse cannot get used in Haskell either
the empty string "" can be read forward or backward the same, it's a palindrome in our case.

Parameters: a string
Returns: a boolean
  whether the input is a palindrome or not
  (case insensitive and ignoring non-alphanumerics)
Examples:
  palindrome("Amore, Roma") // true
  palindrome("A man, a plan, a canal: Panama") // true
  palindrome("No 'x' in 'Nixon'") // true
  palindrome("Abba Zabba, you're my only friend") // false
Pseudocode:
  initialize reversed var assigned to an empty string
  convert input str into lowercase
  remove all spaces and non alphanumeric chars
  iterate over the modified string, starting from the end
    concat current char with reversed string
  return result of conditional checking if reversed equals raw
*/

function palindrome(string) {
  let rev = '', raw = [...string.toLowerCase()].reduce((s, c) => (n = c.charCodeAt()) > 96 && n < 123 ? s += c : s, '');
  for (let i = raw.length - 1; i >= 0; i--) rev += raw[i];
  return rev === raw;
}