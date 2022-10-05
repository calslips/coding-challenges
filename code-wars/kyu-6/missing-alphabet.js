/*
In this Kata you have to create a function,
named insertMissingLetters, that takes in a string and outputs
the same string processed in a particular way.

The function should insert only after the first occurrence of
each character of the input string, all the alphabet letters that:

-are NOT in the original string
-come after the letter of the string you are processing

Each added letter should be in uppercase, the letters of the
original string will always be in lowercase.

Example:

input: "holly"
missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"
output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

You don't need to validate input, the input string will always
contain a certain amount of lowercase letters (min 1 / max 50).

Parameters: a string (lowercased letters)
Returns: a string (lower & uppercased)
Examples:
  insertMissingLetters("hello")
    // "hIJKMNPQRSTUVWXYZeFGIJKMNPQRSTUVWXYZlMNPQRSTUVWXYZloPQRSTUVWXYZ"
  insertMissingLetters("holly")
    // "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"
Pseudocode:
  initialize a result var, assigned to an empty string
  initialize a alphabet var, assigned to string of alphabet uppercased
  iterate over the input string
    check if current letter is included in result
      if it is
        concat current to result AND continue
    concat current letter with result string
    convert current letter to uppercase
    find index of upper'd current in alphabet
    create a copy (slice) of alphabet from above index to the end
    iterate over slice of alphabet
      convert input string to uppercase
      check if current alphabet letter is included in upper'd input
        if it is
          continue
        if not
          concat current alphabet letter with result string
  return result
*/

function insertMissingLetters (str) {
  let result = '', alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let c of str) {
    if (result.includes(c)) {
      result += c;
      continue;
    }
    result += c;
    for (let l of alpha.slice(alpha.indexOf(c.toUpperCase()) + 1)) {
      !str.toUpperCase().includes(l) && (result += l);
    }
  }
  return result;
}

// function insertMissingLetters (str) {
//   let result = '', alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   for (let i = 0; i < str.length; i++) {
//     if (result.includes(str[i])) {
//       result += str[i];
//       continue;
//     }
//     result += str[i];
//     for (let j = 0; j < (r = alpha.slice(alpha.indexOf(str[i].toUpperCase()) + 1)).length; j++) {
//       !str.toUpperCase().includes(r[j]) && (result += r[j]);
//     }
//   }
//   return result;
// }

// function insertMissingLetters (str) {
//   let result = '', alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   [...str].forEach(l => {
//     if (result.includes(l)) {
//       result += l;
//       return;
//     }
//     result += l;
//     let remainder = alpha.slice(alpha.indexOf(l.toUpperCase()) + 1);
//     [...remainder].forEach(c => !str.toUpperCase().includes(c) && (result += c));
//   });
//   return result;
// }
