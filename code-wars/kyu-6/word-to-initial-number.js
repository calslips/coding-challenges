/*
Your task is to write the word to number converter. Digits in the number
should match letters in the word. Plus generated number should be the smallest
possible number you can get.

Words will contain of maximum 10 distinct letters, but word can be any length,
even longer than 10 characters long.
Number can NOT start with 0
Same letters share the same digit regardless of case
For empty string return 0

Examples:
"A" -> 1 - OK
"ABA" -> 353 - WRONG ( number is OK, but it's not the smallest number )
"ABA" -> 333 - WRONG ( different letters map to same digits )
"ABA" -> 357 - WRONG ( same letters map to different digits )

Parameters: a single string
Returns: a number
  (each digit maps to a specific character from input string)
Examples:
  convert("CodeWars") // 10234567
  convert("KATA") // 1020
Pseudocode:
  initialize a map (to associate chars to digits)
  iterate over the string, have an 'n' variable to keep track of numbers used 0-9
  (iterate as long as 'n' < 10)
    check if map has current letter
      if it does,
        continue
      if NOT,
        set current letter in map to equal current 'n'
          check if current 'n' is zero
            if it is
              use 'n' + 1
          check if current 'n' is one
            if it is
              use 'n' - 1
          otherwise
            use 'n' as is
        increment 'n'
  convert string input to array (each element is a single char)
  map over string array to replace the char with its numerical equivalent
    (getting the number value associated with the char in the map)
    join the array (will become string)
    convert to number
    return converted result
*/

function convert(s) {
  const map = new Map();
  s = s.toLowerCase();
  for (let i = 0, n = 0; n < 10 && i < s.length; i++) {
    if (map.has(s[i])) continue;
    map.set(s[i], !n ? n + 1 : n === 1 ? n - 1 : n), n++;
  }
  return +[...s].map(c => map.get(c)).join('')
}