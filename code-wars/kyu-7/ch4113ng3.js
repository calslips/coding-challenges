/*
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E'
with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

Parameters: a str
Returns: a str
  chars a, e, & l (case insensitive, except l)
  swapped with 4, 3, 1 respectively
Examples:
  nerdify("Fund4m3nt41s"), "Fund4m3nt41s"
  nerdify("Seven"), "S3v3n"
  nerdify("Los Angeles"), "Los 4ng313s"
  nerdify("Seoijselawuue"), "S3oijs314wuu3"
Pseudocode:
  convert input str to an array of chars
  iterate over the chars array
    if current char lowercased is 'a'
      replace it with 4
    if current char lowercased is 'e'
      replace it with 3
    if current char is a lowercased 'l'
      replace it with 1
  return chars array joined on empty str
*/

function nerdify(txt) {
  return [...txt].map(c => c === 'a' || c === 'A' ? 4 : c === 'e' || c === 'E' ? 3 : c === 'l' ? 1 : c).join('');
}