/*
You are given an array(list) strarr of strings and an integer k.
Your task is to return the first longest string consisting of k
consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"],
  k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
  --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return ""
(return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption

Parameters:
  an arr of strs
  a num (of consecutive strs to join within arr)
Returns: a str
  (the longest str from arr after concating the num
  consecutive strs together and comparing to eachother)
Examples:
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta"
  longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh"
  longestConsec([], 3), ""
  longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
  longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu"
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), ""
  longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz"
  longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), ""
  longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), ""
Pseudocode:
  if input arr has no strs OR
  num input is greater than arr length OR
  num input is less than or equal to 0
    return empty str
  initialize longest var assigned to an empty arr
  iterate over the length of input arr minus num input,
  increment index counter by 1
    slice input arr from current index to index + input num
    join sliced strs
    assign above joined strs to concattedStr var
    if concattedStr length is greater than length of longest
      reassign longest to be concattedStr
  return longest
*/

function longestConsec(strarr, k) {
  let longest = '';
  for (let i = 0; i <= strarr.length - k && k > 0; i++) {
    const concattedStr = strarr.slice(i, i + k).join('');
    if (concattedStr.length > longest.length) longest = concattedStr;
  }
  return longest;
}