/*
Egg Talk.
Insert an "egg" after each consonant. If there are no consonants,
there will be no eggs. Argument will consist of a string with
only alphabetic characters and possibly some spaces.

eg:
hello => heggeleggleggo
eggs => egegggeggsegg
FUN KATA => FeggUNegg KeggATeggA

Designed to practice the basics of regular expressions.
With this in mind a little bit of commenting in your solution
could be very useful.

Check Eloquent Javascript p176

https://regex101.com/#javascript

Parameters: a str
Returns: a str
  with str 'egg' inserted after each consonant
Examples:
  heggeleggleggo("hello"), "heggeleggleggo"
  heggeleggleggo("code here"), "ceggodegge heggeregge"
Pseudocode:
  initialize a result var assigned to an empty str
  initialize noEgg var assigned to str containing
    lowercase vowels and space
  iterate over the chars of input word
    if current char (lowercased) is contained within noEgg
      concat result with current char
    otherwise
      concat result with current char + egg
  return result str
*/

function heggeleggleggo(word) {
  let result = '', noEgg = 'aeiou ';
  for (const char of word) result += char + (noEgg.includes(char.toLowerCase()) ? '' : 'egg');
  return result;
}