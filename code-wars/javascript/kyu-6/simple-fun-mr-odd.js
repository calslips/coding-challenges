/*
Mr.Odd is my friend. Some of his common dialogues are
“Am I looking odd?” , “It’s looking very odd” etc. Actually “odd”
is his favorite word.
In this valentine when he went to meet his girlfriend. But he
forgot to take gift. Because of this he told his gf that he did
an odd thing. His gf became angry and gave him punishment.
His gf gave him a string str of contain only lowercase letter and
told him,

“You have to take 3 index i,j,k such that i<j<k and str[i] =‘o’,
str[j]=’d’,str[k]=’d’ and cut them from the string and make a new
string “odd”. How many string you can make?”

Mr.Odd wants to impress his gf so he want to make maximum number
of “odd”. As he is lazy, he ask you to help him and tell him
maximum number of “odd” he an make.

Example
For str="oudddbo", the result should be 1.
"oudddbo"(cut 1 odd)--> ".u..dbo"(no more odd)

For str="ooudddbd", the result should be 2.
"ooudddbd"(cut 1st odd)--> ".ou..dbd"(cut 2nd odd) --> "..u...b."

Input/Output
[input] string str
  a non-empty string that contains only lowercase letters.
  0 < str.length <= 10000
[output] an integer
  the maximum number of "odd".

Parameters: a str
Returns: a num
  how many unique 'odd's that can be found
  within input str & in the proper order
  ('o' before 'd' before 'd')
Examples:
  odd("oudddbo"), 1
  odd("ouddddbo"), 1
  odd("ooudddbd"), 2
  odd("qoddoldfoodgodnooofostorodrnvdmddddeidfoi"), 6
Pseudocode:
  initialize count var assigned to zero
  initialize odd var assigned to an empty str
  initialize a do while loop
    create an inner loop to iterate over input str
    as long as 'odd' has NOT been found
      if current char is o and odd is empty OR
      if current char is d and 1st/2nd chars have been found
        concat current char with odd
        remove current char from str
        decrement counter to account for removed char
  continue outer loop as long as odd was found
    reassign odd to be an empty str
    (restarting search from scratch each iteration)
    increment count
  return count
*/

function odd(str) {
  let count = 0, odd = '';
  do {
    for (let i = 0; i < str.length && odd !== 'odd'; i++) {
      if (!odd && str[i] === 'o' || (odd === 'o' || odd === 'od') && str[i] === 'd') {
        odd += str[i], str = str.slice(0, i) + str.slice(i + 1), i--;
      }
    }
  } while (odd === 'odd' && (odd = '', ++count))
  return count;
}