/*
For a given string s find the character c (or C) with
longest consecutive repetition and return:
[c, l]
where l (or L) is the length of the repetition.
If there are two or more characters with the same l
return the first in order of appearance.

For empty string return:
["", 0]

Parameters: a str
Returns: a tuple
  containing a str
  (longest consecutive repeated char from input)
  and a num
  (the length of the longest consecutive repeats)
  (if there are 2 or more with the same count
  of repeats, return 1st occurring)
Examples:
  longestRepetition("aaaabb"),      ["a", 4]
  longestRepetition("bbbaaabaaaa"), ["a", 4]
  longestRepetition("cbdeuuu900"),  ["u", 3]
  longestRepetition("abbbbb"),      ["b", 5]
  longestRepetition("aabb"),        ["a", 2]
  longestRepetition(""),            ["", 0]
  longestRepetition("ba"),          ["b", 1]
Pseudocode:
  iniitalize a char var assigned to an empty str
  initialize a count var assigned to 0
  initialize result var assigned to an tuple containing
    char at index 0 and count at index 1
  iterate over the length of input str
    if current equals last
      increment count
    otherwise
      if count is greater than result at index 1
        set result at index 0 to char AND
        set result at index 1 to count
      reassign char to current AND
      reassign count to 1
  return result
*/

function longestRepetition(s) {
  let char = '', count = 0, result = [char, count];
  for (let i = 0; i < s.length; i++) {
    s[i] === s[i - 1] && count++;
    if (s[i] !== s[i - 1] || i === s.length - 1) {
      if (count > result[1]) result[0] = char, result[1] = count;
      char = s[i], count = 1;
    }
  }
  return result;
}