/*
You have two arguments: string - a string of random letters(only lowercase)
and array - an array of strings(feelings). Your task is to return how many
specific feelings are in the array.

If the feeling can be formed once - plus one to the answer.
If the feeling can be formed several times from different letters -
plus one to the answer.
Eeach letter in string participates in the formation of all feelings.
'angerw' -> 2 feelings: 'anger' and 'awe'.

Parameters:
  a string (only lowercase letters)
  an array (of strings; feelings)
Returns:
  the number of feelings from the input array that can be found in the input string
Examples:
  countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief']) // '3 feelings.'
  countFeelings('angerw', ['anger', 'awe', 'joy', 'love', 'grief']) // '2 feelings.'
  countFeelings('griefgriefgrief', ['anger', 'awe', 'joy', 'love', 'grief']) // '1 feeling.'
  countFeelings('abcdkasdfvkadf', ['desire', 'joy', 'shame', 'longing', 'fear']) // '0 feelings.'
Pseudocode:
  iterate over the array of feelings (filter)
    iterate over each letter of a feeling (every)
      check if every letter is included in the input string
  get the length of filtered array
  return length + feeling(s) as string
*/

function countFeelings(string, array) {
  return `${(count = array.filter(f => [...f].every(l => string.includes(l))).length)} feeling${count === 1 ? '' : 's'}.`;
}