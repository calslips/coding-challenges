/*
Kate likes to count words in text blocks. By words she means
continuous sequences of English alphabetic characters
(from a to z ). Here are examples:

Hello there, little user5453 374 ())$. I’d been using my sphere
as a stool. Slow-moving target 839342 was hit by OMGd-63 or K4mp.
contains "words" ['Hello', 'there', 'little', 'user', 'I', 'd',
'been', 'using', 'my','sphere', 'as', 'a', 'stool', 'Slow',
'moving', 'target', 'was', 'hit', 'by', 'OMGd', 'or', 'K', 'mp']

Kate doesn't like some of words and doesn't count them. Words to
be excluded are "a", "the", "on", "at", "of", "upon", "in" and "as",
case-insensitive.

Today Kate's too lazy and have decided to teach her computer to
count "words" for her.

Example Input 1
Hello there, little user5453 374 ())$.

Example Output 1
4

Example Input 2
I’d been using my sphere as a stool. I traced counterclockwise
circles on it with my fingertips and it shrank until I could palm it.
My bolt had shifted while I’d been sitting. I pulled it up and yanked
the pleats straight as I careered around tables, chairs, globes, and
slow-moving fraas. I passed under a stone arch into the Scriptorium.
The place smelled richly of ink. Maybe it was because an ancient fraa
and his two fids were copying out books there. But I wondered how long
it would take to stop smelling that way if no one ever used it at all;
a lot of ink had been spent there, and the wet smell of it must be
deep into everything.

Example Output 2
112

Parameters: a string
Returns: a number
Examples:
  wordCount("hello there") // 2
  wordCount("hello there and a hi") // 4
  wordCount("I'd like to say goodbye") // 6
  wordCount("Slow-moving user6463 has been here") // 6
  wordCount("%^&abc!@# wer45tre") // 3
  wordCount("abc123abc123abc") // 3
  wordCount("Really2374239847 long ^&#$&(*@# sequence") // 3
Pseudocode:
  initialize a word var, assigned to an empty string
  initialize a words var, assigned to an empty array
  iterate over the length of the input str (lowercase)
    if current char is an alphabetic char from a-z
      concat word with it
      if current char is the last char of input str
        push current word to words array
    if current char is NOT an alphabet letter
      push current word to words array
      reassign word to be an empty string
  filter words array to exclude specified words
  return filtered array length
*/

function wordCount(s) {
  s = s.toLowerCase();
  let word = '', words = [], bannedWords = ['a', 'the', 'on', 'at', 'of', 'upon', 'in', 'as'];
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() > 96 && s[i].charCodeAt() < 123) {
      word += s[i];
      if (i === s.length - 1) words.push(word);
    } else {
      if (word) words.push(word), word = '';
    }
  }
  return words.filter(w => !bannedWords.includes(w)).length;
}