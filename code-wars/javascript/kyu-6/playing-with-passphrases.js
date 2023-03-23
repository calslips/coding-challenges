/*
Everyone knows passphrases. One can choose passphrases from poems, songs,
movies names and so on but frequently they can be guessed due to common
cultural references. You can get your passphrases stronger by different
means. One is the following:

choose a text in capital letters including or not digits and non
alphabetic characters,

1. shift each letter by a given number but the transformed letter must be
   a letter (circular shift),
2. replace each digit by its complement to 9,
3. keep such as non alphabetic and non digit characters,
4. downcase each letter in odd position, upcase each letter in even
   position (the first character is in position 0),
5. reverse the whole result.

Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program.
Would you write it?

Parameters:
  a string
  a number
Returns:
  input string modified
Examples:
  playPass("BORN IN 2015!", 1)
    // "CPSO JO 7984!"
  playPass("I LOVE YOU!!!", 1)
    // "!!!vPz fWpM J"
  playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)
    // "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"
Pseudocode:
  initialize result variable, empty array
  initialize alphabet variable to be a string of the alphabet uppercased
  convert input string into an array (each element a char)
  iterate over string array
    if current char exists in alphabet
      find index of current char within alphabet
      if index is odd
        replace current char with char at index + input number (circular) lowercased
      else if index is even
        replace current char with char at index + input number (circular) uppercased
    else if current char is a number
      replace with its absolute difference between 9
    otherwise keep char the same
  return result array reversed and joined on an empty string
*/

function playPass(s, n) {
  const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return [...s].reduce((p, c, i) => a.includes(c)
    ? p.concat((l = a[(a.indexOf(c) + n) % 26]) && i % 2 ? l.toLowerCase() : l)
    : !isNaN(c) && c !== ' '
      ? p.concat(Math.abs(c - 9))
      : p.concat(c)
  , []).reverse().join('');
}