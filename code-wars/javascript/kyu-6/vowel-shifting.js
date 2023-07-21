/*
You get a "text" and have to shift the vowels by "n" positions
to the right.
(Negative value for n should shift to the left.)
"Position" means the vowel's position if taken as one item in a
list of all vowels within the string.
A shift by 1 would mean, that every vowel shifts to the place of
the next vowel.

Shifting over the edges of the text should continue at the other edge.

Example:

text = "This is a test!"
n = 1
output = "Thes is i tast!"

text = "This is a test!"
n = 3
output = "This as e tist!"

If text is null or empty return exactly this value.
Vowels are "a,e,i,o,u".

Parameters:
  a str
  a num
Returns: a str
Examples:
  vowelShift("This is a test!", 0), "This is a test!"
  vowelShift("This is a test!", 1), "Thes is i tast!"
  vowelShift("This is a test!", 3), "This as e tist!"
Pseudocode:
  initialize a vowels var assigned to str containing vowels
  initialize a found var assigned to an empty str
  iterate over input str and place found vowels in found var
  if input num modulus length of found is 0
    return input as is
  loop over the found vowels, n modulus length times
    if input n is positive
      move the last vowel to the front each iteration
    otherwise if input n is negative
      move the first vowel to the back each iteration
  iterate over the input str
  keep track of str index AND found index
  increment str index each loop
    if current char of str is a vowel
      replace it with current found char
      increment found index
  return modified str
*/

function vowelShift(text, n) {
  if (!text) return text;
  const vowels = 'aeiou';
  let found = [...text].reduce((v, c) => vowels.includes(c.toLowerCase()) ? v + c : v, '');
  const shifts = Math.abs(n) % found.length;
  if (!shifts) return text;
  for (let i = 0; i < shifts; i++) {
    found = n < 0 ? found.slice(1) + found[0] : found.slice(-1) + found.slice(0, -1);
  }
  for (let j = 0, v = 0; v < found.length; j++) {
    if (vowels.includes(text[j].toLowerCase())) text = text.slice(0, j) + found[v++] + text.slice(j + 1);
  }
  return text;
}