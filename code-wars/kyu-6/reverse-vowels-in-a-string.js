/*
In this kata, your goal is to write a function which will reverse
the vowels in a string. Any characters which are not vowels should
remain in their original position.
For simplicity, you can treat the letter y as a consonant, not a vowel.

Parameters: a string
Returns: a string with vowels in reversed order
Examples:
  reverseVowels("Hello!") // "Holle!"
  reverseVowels("Tomatoes") // "Temotaos"
  reverseVowels("Reverse Vowels In A String")
    // "RivArsI Vewols en e Streng"
Pseudocode:
  initialize a vowels var containing upper&lowercase vowels
  initialize a reversed order var containing input vowels
    in the revesered order that they appear (in an array)
  iterate over the input str
    check if current char is a vowel
      if it is,
        replace it with the 1st char in the reversed order var &
        remove the 1st char from reversed order
      otherwise,
        keep it the same and continue
  return modified str
*/

function reverseVowels(str) {
  let vs = 'AEIOUaeiou', r = [...str].reduceRight((a, l) => vs.includes(l) ? (a.push(l), a) : a, []);
  return [...str].reduce((s, l) => vs.includes(l) ? s += r.shift() : s += l, '');
}