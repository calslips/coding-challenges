/*
You are given a gigantic number to decode. Each number is a code
that alternates in a pattern between encoded text and a smaller,
encoded number. The pattern's length varies with every test, but
the alternation between encoded text and an encoded number will
always be there. Following this rule, each number tested begins
with encoded text and ends with an encoded number.

How the encoding works
Now, we should probably review how the string of numbers is
formed - considering you have to unform it. So, first, some text
is taken, and encoded. The system of encoding is taking each
letter's position in the alphabet and adding 100 to it. For
example, m in the real text would be 113 in the code-number.

After the text, there is a binary number. You should convert
this number to a normal, base 10 decimal (all of them can be
  converted into whole, non-negative numbers).

Separating encoded text and encoded numbers, there is a 98.
Because the numbers are in binary, the only digits they use are
'0' and '1', and each letter of the alphabet, encoded, is between
101-127, all instances of 98 are to indicate a separation between
encoded text and encoded numbers. There may also be a 98 at the
very end of the number.

When you return your final answer, the text and numbers should
always be separated by a comma (,)

Example
decode(103115104105123101118119981001098113113113981000) =
  "codewars, 18, mmm, 8"
The part of the code until the first 98 can be decoded to
"codewars". 10010 is binary for 18. 113113113 translates to "mmm".
And 1000 is binary for 8.

Here is a visualisation of the example:

103 115 104 105 123 101 118 119   98   10010   98   113 113 113   98   1000
 c   o   d   e   w   a   r   s     ,     18     ,    m   m   m     ,     8

Parameters: a str (num code)
Returns: a str (decoded)
Examples:
  decode('103115104105123101118119981001098'),
    "codewars, 18"
  decode('119112105105116981000981091199810019810612111498100000110001'),
    "sleep, 8, is, 9, fun, 2097"
Pseudocode:
  split input str on 98
  iterate over split array
    for even indices
      iterate over str nums by 3 digits
        convert each 3 digit portion to its associated letter
      replace current str with decoded str
    for odd indices
      replace current binary str with decimal
  return split array joined on ', '
*/

function decode(number) {
  return number
    .split('98')
    .filter(Boolean)
    .map((s, i) => {
      if (i % 2) return parseInt(s, 2);
      else {
        let text = '';
        for (let i = 0; i < s.length; i += 3) text += String.fromCharCode(s.slice(i, i + 3) - 4);
        return text;
      }
    })
    .join(', ');
}