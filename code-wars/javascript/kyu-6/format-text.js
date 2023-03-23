/*
Write a function format that takes two arguments, text and width,
and formats the text to fit the width.

Your function should divide the given text into lines using
newline characters. It should fit as many words into each line as
possible without exceeding the given width or splitting any words
between two lines. There should not be a space at the beginning or
end of any line. For example, here is some text formatted with a
width of 50:

Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aliquam nec consectetur risus. Cras vel urna
a tellus dapibus consequat. Duis bibendum
tincidunt viverra. Phasellus dictum efficitur sem
quis porttitor. Mauris luctus auctor diam id
ultrices. Praesent laoreet in enim ut placerat.
Praesent a facilisis turpis.

And the same text formatted with a width of 30:

Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Aliquam nec consectetur risus.
Cras vel urna a tellus dapibus
consequat. Duis bibendum
tincidunt viverra. Phasellus
dictum efficitur sem quis
porttitor. Mauris luctus
auctor diam id ultrices.
Praesent laoreet in enim ut
placerat. Praesent a facilisis
turpis.

For the purpose of this exercise, words can contain any
non-whitespace character and all words are separated by a single
space. Words will never be longer than the provided width.

Parameters: a string and a num
Returns: a string
  formatted into lines so that each line
  does not exceed the length of num
  (including new line char)
Examples:
  format(text, 30) ===
    "Lorem ipsum dolor sit amet,"    + "\n" +
    "consectetur adipiscing elit."   + "\n" +
    "Aliquam nec consectetur risus." + "\n" +
    "Cras vel urna a tellus dapibus" + "\n" +
    "consequat. Duis bibendum"       + "\n" +
    "tincidunt viverra. Phasellus"   + "\n" +
    "dictum efficitur sem quis"      + "\n" +
    "porttitor. Mauris luctus"       + "\n" +
    "auctor diam id ultrices."       + "\n" +
    "Praesent laoreet in enim ut"    + "\n" +
    "placerat. Praesent a facilisis" + "\n" +
    "turpis."
  format(text, 50) ===
    "Lorem ipsum dolor sit amet, consectetur adipiscing" + "\n" +
    "elit. Aliquam nec consectetur risus. Cras vel urna" + "\n" +
    "a tellus dapibus consequat. Duis bibendum"          + "\n" +
    "tincidunt viverra. Phasellus dictum efficitur sem"  + "\n" +
    "quis porttitor. Mauris luctus auctor diam id"       + "\n" +
    "ultrices. Praesent laoreet in enim ut placerat."    + "\n" +
    "Praesent a facilisis turpis."
Pseudocode:
  split text into an array of words, reversed
  initialize a line var to be an empty str
  initialize a result var to be an empty str
  iterate over array of words, while it has a length
    if line is empty
      pop last word off of array and concat with line
    otherwise
      if length of line + length of next word + 1 is greater than width
        concat result with line + new line char
        reassign line to be an empty str
      otherwise
        concat line with space + next word
  if line has any stragglers
    concat with result
  return result str
*/

function format(text, width) {
  let words = text.split(' ').reverse(), line = words.pop(), result = '';
  while (words.length) {
    if (line.length + words[words.length - 1].length + 1 > width) result += line + '\n', line = words.pop();
    else line += ' ' + words.pop();
  }
  if (line) result += line;
  return result;
}

// function format(text, width) {
//   let words = text.split(' ').reverse(), line = '', result = '';
//   while (words.length) {
//     if (!line) {
//       line += words.pop();
//     } else {
//       if (line.length + words[words.length - 1].length + 1 > width) {
//         result += line + '\n';
//         line = '';
//       } else {
//         line += ' ' + words.pop();
//       }
//     }
//   }
//   if (line) result += line;
//   return result;
// }