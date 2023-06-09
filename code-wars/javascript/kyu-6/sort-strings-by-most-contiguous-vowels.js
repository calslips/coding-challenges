/*
The goal of this Kata is to write a function that will receive an array of
strings as its single argument, then the strings are each processed and sorted
(in desending order) based on the length of the single longest sub-string of
contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The
strings may contain letters, numbers, special characters, uppercase, lowercase,
whitespace, and there may be (often will be) multiple sub-strings of contiguous
vowels. We are only interested in the single longest sub-string of vowels within
each string, in the input array.

Example:
str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"

When the strings are sorted, str1 will be first as its longest sub-string of
contiguous vowels "eau" is of length 3, while str2 has as its longest sub-string
of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length,
then the strings should remain in the order in which they were found in the
orginal array.

Parameters: an array of strs
Returns: an array of strs
  sorted from most contiguous vowels in str to least
Examples:
  sortStringsByVowels(["aa","eee","oo","iiii"]),
    ["iiii","eee","aa","oo"]
  sortStringsByVowels(["a","e","ii","ooo","u"]),
    ["ooo","ii","a","e","u"]
  sortStringsByVowels(["ioue","ee","uoiea"]),
    ["uoiea", "ioue","ee"]
  sortStringsByVowels(["high","day","boot"]),
    ["boot","high","day"]
  sortStringsByVowels(["none","uuu","Yuuuge!!"]),
    ["uuu","Yuuuge!!","none"]
  sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"]),
    ["GREEEN","AIBRH","YOUNG",""]
  sortStringsByVowels(["jyn","joan","jimmy","joey"]),
    ["joan","joey","jimmy","jyn"]
  sortStringsByVowels(["uijijeoj","lkjlkjww2","iiutrqy"]),
    ["iiutrqy","uijijeoj","lkjlkjww2"]
  sortStringsByVowels(["how about now","a beautiful trio of"]),
    ["a beautiful trio of","how about now"]
  sortStringsByVowels(["every","bataux","is","waaaay","loose"]),
    ["waaaay","bataux","loose","every","is"]
Pseudocode:
  create a helper fn to find the max contiguous vowel count in a str
  call sort on strings array
    return result of helper called on strB minus result of helper called on strA
  return sorted strings array
*/

function sortStringsByVowels(strings) {
  return [...strings].sort((a, b) => countMostContiguousVowels(b) - countMostContiguousVowels(a));
}

function countMostContiguousVowels(string) {
  let max = 0, vowels = 'aeiou', str = string.toLowerCase();
  for (let i = 0, count = 0; i < str.length; ++i === str.length && count > max && (max = count)) {
    if (vowels.includes(str[i])) count++;
    else count > max && (max = count), count = 0;
  }
  return max;
}