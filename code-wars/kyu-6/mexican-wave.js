/*
Introduction
The wave (known as the Mexican wave in the English-speaking world outside
North America) is an example of metachronal rhythm achieved in a packed
stadium when successive groups of spectators briefly stand, yell, and
raise their arms. Immediately upon stretching to full height, the
spectator returns to the usual seated position.
The result is a wave of standing spectators that travels through the crowd,
even though individual spectators never move away from their seats. In many
large arenas the crowd is seated in a contiguous circuit all the way around
the sport field, and so the wave is able to travel continuously around the
arena; in discontiguous seating arrangements, the wave can instead reflect
back and forth through the crowd. When the gap in seating is narrow, the
wave can sometimes pass through it. Usually only one wave crest will be
present at any given time in an arena, although simultaneous,
counter-rotating waves have been produced. (Source Wikipedia)

Task
In this simple Kata your task is to create a function that turns a string
into a Mexican Wave. You will be passed a string and you must return that
string in an array where an uppercase letter is a person standing up.

Rules
 1.  The input string will always be lower case but maybe empty.
 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Parameters: a string (lowercased)
Returns: an array of multiple iterations of the input string
  where capitalization traverses the length of the string
  (skipping & not counting whitespace,
  length of array equats to the number of actual letters in the string)
Examples:
  wave("hello")
    // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
  wave("codewars")
    // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
  wave("")
    // []
  wave("two words")
    // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
  wave(" gap ")
    // [" Gap ", " gAp ", " gaP "]
Pseudocode:
  initialize a result array
    with length equal to the count of actual chars from input string
    (NOT including whitespace)
    and each element to be the input string
  iterate over the result array
    initialize a newWord variable to an empty string
    iterate over the chars of each word element
      if current char is whitespace
        concat it with newWord
        increment outer index
        (to match count of inner index as outer index will be less than inner index,
        due to outer index excluding whitespace count while inner index indiscriminately
        counts all values including whitespace)
      otherwise
        if outer index matches inner index
          concat newWord with current char capitalized
        if they do NOT match
          concat newWord with current char as is (lowercase)
    return current variation of newWord to replace original input string element
  return result array
*/

const wave = s => [...s].reduce((p, c, i) => c === ' ' ? p : p.concat(s.slice(0, i) + c.toUpperCase() + s.slice(++i)), []);

// const wave = s => [...s].map((c, i) => c === ' ' ? '' : s.slice(0, i) + c.toUpperCase() + s.slice(++i)).filter(v => v);

// const wave = s => [...s].map((c, i) => s.slice(0, i) + c.toUpperCase() + s.slice(++i)).filter(v => v !== s);

// function wave(str) {
//   return Array(str.split(' ').join('').length).fill(str).map((w, i) => [...w].reduce((p, c, j) => c === ' ' ? (i++, p + c) : i === j ? p + c.toUpperCase() : p + c, ''));
// }

// function wave(str) {
//   return Array(str.split(' ').join('').length).fill(str).map((w, i) => {
//     let newW = '';
//     for (let j = 0; j < w.length; j++) {
//       if (w[j] === ' ') newW += w[j], i++;
//       else i === j ? newW += w[j].toUpperCase() : newW += w[j];
//     }
//     return newW;
//   });
// }

// function wave(str) {
//   return Array(str.split(' ').join('').length).fill(str).map((w, i) => {
//     let newW = '';
//     for (let j = 0; j < w.length; j++) {
//       if (w[j] === ' ') {
//         newW += w[j];
//         i++;
//       } else {
//         i === j ? newW += w[j].toUpperCase() : newW += w[j];
//       }
//     }
//     return newW;
//   });
// }