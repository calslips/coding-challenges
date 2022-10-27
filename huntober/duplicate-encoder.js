// The goal of this exercise is to convert a string to a new
// string where each character in the new string is "(" if that
// character appears only once in the original string, or ")"
// if that character appears more than once in the original
// string. Ignore capitalization when determining if a character
// is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// takes in a string, always has content? never an empty string?
// case-insensitive. spacing counts too?
// returns a string containing only "(" and ")" depending on
// whether the char appears once or more than once respectively

function duplicateEncode(str) {
  // convert input str into an array of lowercased chars
  // iterate over the array
    // if current char is unique
      // replace it with "("
    // otherwise
      // replace it with ")"
  // join modified array into a string
  // return modified string
  return [...str.toLowerCase()].map(e => str.indexOf(e) === str.lastIndexOf(e) ? '(' : ')').join('');
}

console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())");
console.log(duplicateEncode("(( @"), "))((");
