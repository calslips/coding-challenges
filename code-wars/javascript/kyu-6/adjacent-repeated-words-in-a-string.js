/*
You know how sometimes you write the the same word twice in a sentence, but then
don't notice that it happened? For example, you've been distracted for a second.
Did you notice that "the" is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words
differ in case, like "as" at the beginning of this sentence.

Write a function that counts the number of sections repeating the same word
(case insensitive). The occurence of two or more equal words next after each other
counts as one.

Examples
"dog cat"                  -->  0
"dog DOG cat"              -->  1
"apple dog cat"            -->  0
"pineapple apple dog cat"  -->  0
"apple apple dog cat"      -->  1
"apple dog apple dog cat"  -->  0
"dog dog DOG dog dog dog"  -->  1
"dog dog dog dog cat cat"  -->  2
"cat cat dog dog cat cat"  -->  3

Parameters: a string
Returns: a number
  (the amount of instances in the input string,
  where a word is repeated back to back)
Examples:
  countAdjacentPairs('') // 0
  countAdjacentPairs('orange Orange kiwi pineapple apple') // 1
  countAdjacentPairs('banana banana banana') // 1
  countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!') // 2
  countAdjacentPairs('pineapple apple') // 0
Pseudocode:
  initialize a count variable assigned to 0;
  convert input string into an array of words
  iterate over the array of words
    if current word equals the last word but NOT the next
      increment count
  return count
*/

function countAdjacentPairs(searchString) {
  return searchString.toLowerCase().split(' ').reduce((c, w, i, a) => w === a[i - 1] && w !== a[i + 1] ? ++c : c, 0);
}