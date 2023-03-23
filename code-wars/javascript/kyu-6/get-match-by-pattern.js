/*
A word is considered a match for a given pattern if the first
occurrence of each letter of the pattern is found in the same
order in the word. If a character in the pattern is duplicated,
the same logic applies further.
The pattern will always be a string of size 3.

Example of use:
predicate = find_matched_by_pattern('acs')
predicate('access') # True
predicate('sacrifice') # False

Examples of inputs/outputs:
Pattern:  Word:     Match:
acs       access    true
          ascces    false
          scares    false
vvl       veturvel  true
          velivel   false
bmb       bomb      true
          babyboom  false

Parameters: a str (pattern, always 3 chars)
Returns: a predicate fn (takes in a str, a word)
  checks if word (inner str arg) matches the pattern (outer str arg)
    inner fn returns a boolean result of the above
Examples:
  const predicate = findMatchedByPattern("acs");
  predicate("access"), true
  predicate("sacrifice"), false
Pseudocode:
  return inner fn that takes in a word (str arg)
    initialize i var as index of 1st pattern char
    initialize j var as index of 2nd pattern char
    initialize k var as index of 3rd pattern char

    if any of the pattern chars are not found in word (index -1)
      return false

    slice word from 0 to index of 1st pattern char exclusive
      if first portion contains 2nd pattern char or 3rd pattern char
        return false
    slice word from 1st pattern char index + 1 to 2nd pattern char index exclusive
      if second portion contains 3rd pattern char
        return false
    otherwise if none of the above conditions resolve to false
      return true (word arg follows pattern arg)
*/

function findMatchedByPattern(pattern) {
  return word => {
    const first = word.slice(0, (i = word.indexOf(pattern[0]))),
          second = word.slice(i + 1, (j = word.indexOf(pattern[1], i + 1))),
          k = word.indexOf(pattern[2], j + 1);
    if (i < 0 || j < 0 || k < 0) return false;
    return !(first.includes(pattern[1]) || first.includes(pattern[2]) || second.includes(pattern[2]));
  }
}

function findMatchedByPattern(pattern) {
  return word => {
    const i = word.indexOf(pattern[0]), j = word.indexOf(pattern[1], i + 1), k = word.indexOf(pattern[2], j + 1);
    if (i < 0 || j < 0 || k < 0) return false;
    const first = word.slice(0, i), second = word.slice(i + 1, j);
    return !(first.includes(pattern[1]) || first.includes(pattern[2]) || second.includes(pattern[2]));
  }
}