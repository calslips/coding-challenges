// Your task is to remove all consecutive duplicate words from a string,
// leaving only first words entries. For example:
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"

// expect a string of space separated words. does casing matter?
// return a new string with NO consequtive duplicates
// (duplicates ARE allowed as long as they are NOT consecutive)

const removeConsecutiveDuplicates = str => {
  // convert the string to an array of words (split on spaces)
  // reduce the words array into an array of non dupes
    // if the previous word in the array is the same as the current
      // return accumulating array untouched
    // otherwise
      // add current word to accumulating array and return it
  // join non dupe array into a string of space-separated words
  // return non dupe string

  return str
    .split(' ')
    .reduce((p, c, i, a) => c === a[i - 1] ? p : (p.push(c), p), [])
    .join(' ');
};

console.log(
  removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"),
  "alpha beta gamma delta alpha beta gamma delta"
);
console.log(
  removeConsecutiveDuplicates("1 1 1 2 2 2 3 3 3 4 4 4 5 5 5"),
  "1 2 3 4 5"
);
console.log(
  removeConsecutiveDuplicates("hello hello hello hello hello"),
  "hello"
);