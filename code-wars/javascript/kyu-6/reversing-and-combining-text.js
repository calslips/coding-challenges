/*
Your task is to Reverse and Combine Words.
It's not too difficult, but there are some things you have to consider...

So what to do?
Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second,
   third with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...

Some easy examples:
Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"

Parameters: a string (containing space-separated words)
Returns: a string
  the input modified, each word gets reversed and join
  1st word with 2nd, 3rd with 4th, etc
  if there is an odd word out, only reverse it
  continue to do the above until the string becomes a
  single word with no whitespace
Examples:
  reverse_and_combine_text("abc def") // "cbafed"
	reverse_and_combine_text("abc def ghi jkl") // "defabcjklghi"
	reverse_and_combine_text("dfghrtcbafed") // "dfghrtcbafed"
	reverse_and_combine_text("234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44")
    // "trzwqfdstrteettr45hh4325543544hjhjh21lllll"
	reverse_and_combine_text("sdfsdf wee sdffg 342234 ftt")
    // "gffds432243fdsfdseewttf"
Pseudocode:
  use recursion
    base case
      if input string contains no whitespace, return it
    recursive case
      initialize result variable assigned to an empty array
      split string into an array of words
      map over each word and reverse it
      iterate over array of reversed words, increment count by 2 each iteration
        concat current word with next word and push to result array
      return recursive fn call with arg = result array joined on spaces
*/

function reverse_and_combine_text(str) {
  if (!str.includes(' ')) return str;
  const result = [];
  const reversedWords = str.split(' ').map(w => [...w].reverse().join(''));
  for (let i = 0; i < reversedWords.length; i += 2) {
    result.push(reversedWords[i] + (reversedWords[i + 1] || ''));
  }
  return reverse_and_combine_text(result.join(' '));
}