/*
..Or rather, what's a name in? For us,
a particular string is where we are looking for a name.

Task
Write a function, taking two strings in parameter,
that tests whether or not the first string contains all of
the letters of the second string, in order.

The function should return true if that is the case, and
else false. Letter comparison should be case-INsensitive.

Examples
    nameInStr("Across the rivers", "chris") --> true
                ^      ^  ^^   ^
                c      h  ri   s

    Contains all of the letters in "chris", in order.
----------------------------------------------------------
    nameInStr("Next to a lake", "chris") --> false

    Contains none of the letters in "chris".
--------------------------------------------------------------------
    nameInStr("Under a sea", "chris") --> false
                   ^   ^
                   r   s

    Contains only some of the letters in "chris".
--------------------------------------------------------------------
    nameInStr("A crew that boards the ship", "chris") --> false
                 cr    h              s i
                 cr                h  s i
                 c     h      r       s i
                 ...

    Contains all of the letters in "chris", but not in order.
--------------------------------------------------------------------
    nameInStr("A live son", "Allison") --> false
               ^ ^^   ^^^
               A li   son

    Contains all of the correct letters in "Allison", in order,
    but not enough of all of them (missing an 'l').

Parameters: 2 strings
  a str of space separated words
  a word
Returns: a boolean
  whether the 2nd arg can be found in
  the 1st, but only with letters in
  the proper order
Examples:
  nameInStr('Across the rivers', 'chris'), true
  nameInStr('Next to a lake', 'chris'), false
  nameInStr('Under a sea', 'chris'), false
  nameInStr('A crew that boards the ship', 'chris'), false
  nameInStr('A live son', 'Allison'), false
Pseudocode:
  convert both input strs to lowercase
  iterate over the length of name
  (after each iteration,
  reassign str to be str sliced from index of current char in name + 1,
  and increment counter (i) by 1)
    if str does NOT contain current char in name
      return false
  if loop completes without setting off false condition
  (the chars in name all exist in str and appear in the correct order)
    return true
*/

function nameInStr(str, name) {
  str = str.toLowerCase(), name = name.toLowerCase();
  for (let i = 0; i < name.length; str = str.slice(str.indexOf(name[i]) + 1), i++) {
    if (!str.includes(name[i])) return false;
  }
  return true;
}