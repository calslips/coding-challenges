// Your job is to figure out the index of which vowel is missing from a given string:
// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain
// all vowles but one. Also, you won't need to worry about capitals.

// takes in a str containing space separated words, with 1 missing vowel
// all lowercase, always only 1 missing vowel
// return a num, the index of the missing vowel
// vowels are aeiou with the respective indices of 01234

function absentVowel(str) {
  // initialize a vowels var containing the vowels aeiou
  // iterate over the vowels str
    // if current vowel is NOT within input str
      // return current vowel index

  for (let i = 0, vowels = 'aeiou'; i < vowels.length; i++) if (!str.includes(vowels[i])) return i;
}

// examples
console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);