/*
An isogram is a word that has no repeating letters, consecutive or
non-consecutive. Implement a function that determines whether a string
that contains only letters is an isogram. Assume the empty string is an
isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str){
  for (let word = str.toLowerCase(); word; word = word.slice(1)) {
    if (word.includes(word[0], 1)) {
      return false;
    }
  }
  return true;
}