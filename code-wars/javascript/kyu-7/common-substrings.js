/*
Given 2 strings, your job is to find out if there is a
substring that appears in both strings. You will return
true if you find a substring that appears in both strings,
or false if you do not. We only care about substrings that
are longer than one letter long.

#Examples:

*Example 1*
SubstringTest("Something","Fun"); //Returns false

*Example 2*
SubstringTest("Something","Home"); //Returns true
In the above example, example 2 returns true because both
of the inputs contain the substring "me".
(soMEthing and hoME)

In example 1, the method will return false because something
and fun contain no common substrings. (We do not count the
  'n' as a substring in this Kata because it is only 1
  character long)

#Rules: Lowercase and uppercase letters are the same.
So 'A' == 'a'.
We only count substrings that are > 1 in length.

#Input: Two strings with both lower and upper cases.
#Output: A boolean value determining if there is a common
  substring between the two inputs.

Parameters: 2 strs
Returns: a boolean
  whether a part (length > 1) of one
  input str can be found within the other
Examples:
  SubstringTest("Something", "Home"), true
  SubstringTest("Something", "Fun"), false
Pseudocode:
  convert strs to same casing
  iterate over 1st str,
  stopping 1 less than its length,
  incrementing counter by 1 after each iteration
    if 2nd str includes a slice of 1st str
    from counter to counter + 2
      return true
  return false
*/

function SubstringTest(str1, str2) {
  str1 = str1.toLowerCase(), str2 = str2.toLowerCase();
  for (let i = 0; i < str1.length - 1; i++) if (str2.includes(str1.slice(i, i + 2))) return true;
  return false;
}