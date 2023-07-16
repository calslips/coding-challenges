/*
The principal of a school likes to put challenges to the students
related with finding words of certain features. One day she said:
"Dear students, the challenge for today is to find a word that
has only one vowel and seven consonants but cannot have the
letters "y" and "m". I'll give a special award for the first
student that finds it." One of the students used his dictionary
and spent all the night without sleeping, trying in vain to find
the word. The next day, the word had not been found yet. This
student observed that the principal has a pattern in the features
for the wanted words:

The word should have n vowels, may be repeated, for example:
  in "engineering", n = 5.

The word should have m consonants, may be repeated also:
  in "engineering", m = 6.

The word should not have some forbidden letters (in an array),
forbid_letters

You will be provided with a list of words, WORD_LIST(python/crystal),
wordList(javascript), wordList (haskell), $word_list(ruby), and you
have to create the function, wanted_words(), that receives the three
arguments in the order given above, wanted_words(n, m, forbid_list)
and output an array with the word or an array, having the words in
the order given in the pre-loaded list, in the case of two or more
words were found.

Let's see some cases:

wantedWords(1, 7, ["m", "y"]) ==
  ["strength"]
wantedWords(3, 7, ["m", "y"]) ==
  ['afterwards', 'background', 'photograph', 'successful', 'understand']

For cases where no words are found the function will output an empty
array.

wantedWords(3, 7, ["a", "s" , "m", "y"]) == []

Help our student to win this and the next challenges of the school.
He needs to sure about a suspect that he has. That many times there
are no solutions for what the principal is asking for. All words have
its letters in lowercase format. Enjoy it!

Parameters:
  a num
  a num
  an array of chars
Returns: an array of strs
Examples:
  wantedWords(1, 7, ["m", "y"]), ["strength"]
  wantedWords(3, 7, ["m", "y"]), ['afterwards', 'background', 'photograph', 'successful', 'understand']
  wantedWords(3, 7, ["a", "s" , "m", "y"]), []
Pseudocode:
  create a map for vowels, values set to 0
  create a map for consonants, values set to 0
  initialize a result array
  iterate over forbidden list
    remove chars from vowels/consonants
  for each word in supplied word list
    create a copy of vowel & consonant maps
    iterate over chars of word
      if there is a char in current word that does NOT exist in either map
        continue to next word iteration
      populate properties for both maps from current word
    if the sum of values from vowel & consonant maps do NOT match restriction
      continue to next word iteration
    push current word to result array
  return result array
*/

function wantedWords(n, m, forbid_let) {
  const vowels = [...'aeiou'].reduce((o, k) => (o[k] = 0, o), {}),
        consonants = [...'bcdfghjklmnpqrstvwxyz'].reduce((o, k) => (o[k] = 0, o), {}),
        result = [];
  forbid_let.forEach(l => (delete vowels[l], delete consonants[l]));
  wordLoop: for (const word of wordList) {
    let vCopy = Object.assign({}, vowels), cCopy = Object.assign({}, consonants);
    for (const letter of word) {
      if (letter in vCopy) vCopy[letter]++;
      else if (letter in cCopy) cCopy[letter]++;
      else continue wordLoop;
    }
    if (Object.values(vCopy).reduce((s, n) => s + n, 0) === n &&
        Object.values(cCopy).reduce((s, n) => s + n, 0) === m) result.push(word);
  }
  return result;
}