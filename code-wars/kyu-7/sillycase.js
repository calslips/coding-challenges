/*
Create a function that takes a string and returns that string
with the first half lowercased and the last half uppercased.

eg: foobar == fooBAR

If it is an odd number then 'round' it up to find which letters
to uppercase. See example below.

sillycase("brian")
//         --^-- midpoint
//         bri    first half (lower-cased)
//            AN second half (upper-cased)

Parameters: a str
Returns: a str
  1st half lowercased
  2nd half uppercased
Examples:
  sillycase('foobar'), "fooBAR"
  sillycase('codewars'), "codeWARS"
  sillycase('brian'), 'briAN'
Pseudocode:
  find halfway point of input str (round up when odd)
  slice 1st half and lowercase
  slice 2nd half and uppercase
  concat slices together
  return sillycased str
*/

function sillycase(silly) {
  return silly.slice(0, half = Math.ceil(silly.length / 2)).toLowerCase() + silly.slice(half).toUpperCase();
}