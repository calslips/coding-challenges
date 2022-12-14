// Given a magazine of words and a ransom note,
// determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// takes in a str of space separated words?
// always a str, always in the format of a sentence with words, no reusing words?
// must casing always match?
// returns a boolean, whether the ransom WORDS can be cut out from the magazine

// quadratic
const ransomNote = function(note, mag) {
  // convert note into an array of words, noteWords
  // convert mag into an array of words, magWords
  // remove punctuation from magWords
  // iterate over the length of words array
    // if the current word exists within magWords array
      // splice it out
    // otherwise
      // return false
  // return true

  const noteWords = note.split(' '),
        magWords = mag.split(' ').map(w => w[w.length - 1].toLowerCase() === w[w.length - 1].toUpperCase() ? w.slice(0, -1) : w);
  for (const word of noteWords) {
    const i = magWords.indexOf(word);
    if (i >= 0) magWords.splice(i, 1);
    else return false;
  }
  return true;
};

// linear
const ransomNote = function(note, mag) {
  // initialize a hashtable
  // convert note into an array of words, noteWords
  // convert mag into an array of words, magWords
  // remove punctuation from magWords
  // iterate over the length of magWords
    // if word exists in hash
      // increment its value
    // otherwise
      // set its value to 1
  // iterate over the length of noteWords
    // if current word exists as a key in hash
      // decrement its value
    // otherwise
      // return false
  // return true

  const hash = {},
        noteWords = note.split(' '),
        magWords = mag.split(' ').map(w => w[w.length - 1].toLowerCase() === w[w.length - 1].toUpperCase() ? w.slice(0, -1) : w);
  for (const word of magWords) {
    hash[word] = ++hash[word] || 1;
  }
  for (const word of noteWords) {
    if (hash[word]) hash[word]--;
    else return false;
  }
  return true;
};

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

//  Examples
console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);