/*
Given two strings, the first being a random string and the second being
the same as the first, but with three added characters somewhere in the
string (three same characters),
Write a function that returns the added character

E.g
string1 = "hello"
string2 = "aaahello"
// => 'a'
The above is just an example; the characters could be anywhere in the string
and string2 is actually shuffled.

Another example
string1 = "abcde"
string2 = "2db2a2ec"
// => '2'
Note that the added character could also exist in the original string

string1 = "aabbcc"
string2 = "aacccbbcc"
// => 'c'
You can assume that string2 will aways be larger than string1, and there
will always be three added characters in string2.

Write the function addedChar() that takes two strings and return the added
character as described above.
// Average runtime: ?ms

Parameters: 2 strings
Returns:
  the character that exists in the 2nd string arg, but not the 1st
Examples:
  addedChar('hello', 'checlclo') // 'c'
  addedChar('hello', 'aaahello') // 'a'
  addedChar('abcde', '2db2a2ec') // '2'
  addedChar('aabbcc', 'aacccbbcc') // 'c'
Pseudocode:
  convert 1st & 2nd string into their own object
    where the key is a letter and the value is the number of times that char occurs
  iterate over 2nd string
    return the char whose value in the 1st obj does NOT equal 2nd obj
*/

function addedChar(s1, s2) {
  const [o1, o2] = [[...s1], [...s2]].map(a => a.reduce((o, k) => (o[k] = o[k] + 1 || 1) && o, {}));
  for (let c of s2) if (o1[c] !== o2[c]) return c;
}

// function addedChar(s1, s2) {
//   const o1 = [...s1].reduce((o, k) => (o[k] = o[k] + 1 || 1) && o, {});
//   const o2 = [...s2].reduce((o, k) => (o[k] = o[k] + 1 || 1) && o, {});
//   for (let c of s2) if (o1[c] !== o2[c]) return c;
// }