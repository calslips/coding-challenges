/*
Vicky is quite the small wonder. Most people don't even realize
she's not a real girl, but a robot living amongst us. Sure, if
you stick around her home for a while you might see her creator
open up her back and make a few tweaks and even see her recharge
in the closet instead of sleeping in a bed.

In this kata, we're going to help Vicky keep track of the words
she's learning.

Write a function, learnWord(word) ( LearnWord(word) in C# ) which
is a method of the Robot object. The function should report back
whether the word is now stored, or if she already knew the word.

Case shouldn't matter. Only alpha characters are valid.
There's also a little trick here. Enjoy!

Parameters: construct a class
  has prop words as an obj to keep track of learned words
  has learnWord method to learn new words (case-insensitive, only alpha)
    or state word is already learned if in words obj
Returns: a str
  depending on if word is new, learned, or contains a non-alpha char
Examples:
  const vicky = new Robot();
  vicky.learnWord('hello'), 'Thank you for teaching me hello'
  vicky.learnWord('world'), 'Thank you for teaching me world'
  vicky.learnWord('goodbye'), 'Thank you for teaching me goodbye'
  vicky.learnWord('world'), 'I already know the word world'
  vicky.learnWord('World'), 'I already know the word World'
Pseudocode:
  create a Robot class
    has property words with the value of an obj
    has method learnWord which takes in a str
      convert str to lowercase
      if str contains any non alpha chars or str is falsy
        return 'I do not understand the input'
      otherwise if str is contained within words obj
        return 'I already know the word <word>'
      otherwise
        add word to words obj and
        return 'Thank you for teaching me <word>'
*/

class Robot {
  constructor(words) {
    this.words = {
      'thank': true,
      'you': true,
      'for': true,
      'teaching': true,
      'me': true,
      'i': true,
      'already': true,
      'know': true,
      'understand': true,
    };
  }
  learnWord(word) {
    const checkWord = word.toLowerCase();
    if (!word || [...checkWord].some(c => c === c.toUpperCase())) return 'I do not understand the input';
    else if (checkWord in this.words) return `I already know the word ${word}`;
    else {
      this.words[checkWord] = true;
      return `Thank you for teaching me ${word}`;
    }
  }
}