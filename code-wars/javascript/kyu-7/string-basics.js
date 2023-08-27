/*
Hey CodeWarrior,

we've got a lot to code today!

I hope you know the basic string manipulation methods, because
this kata will be all about them.

Here we go...

Background
We've got a very long string, containing a bunch of User IDs.
This string is a listing, which seperates each user ID with a
comma and a whitespace ("' "). Sometimes there are more than
only one whitespace. Keep this in mind! Futhermore, some user
Ids are written only in lowercase, others are mixed lowercase
and uppercase characters. Each user ID starts with the same 3
letter "uid", e.g. "uid345edj". But that's not all! Some stupid
student edited the string and added some hashtags (#). User IDs
containing hashtags are invalid, so these hashtags should be
removed!

Task
Remove all hashtags
Remove the leading "uid" from each user ID
Return an array of strings --> split the string
Each user ID should be written in only lowercase characters
Remove leading and trailing whitespaces

Note
Even if this kata can be solved by using Regex, please try to
find a solution by using only the built-in String methods.

Parameters: a str
Returns: an array of strs
Examples:
  getUsersIds("uid12345"), ["12345"]
  getUsersIds("   uidabc  "), ["abc"]
  getUsersIds("#uidswagger"), ["swagger"]
  getUsersIds("uidone, uidtwo"), ["one", "two"]
  getUsersIds("uidCAPSLOCK"), ["capslock"]
  getUsersIds("uid##doublehashtag"), ["doublehashtag"]
  getUsersIds("  uidin name whitespace"), ["in name whitespace"]
  getUsersIds("uidMultipleuid"), ["multipleuid"]
  getUsersIds("uid12 ab, uid#, uidMiXeDcHaRs"), ["12 ab", "", "mixedchars"]
  getUsersIds(" uidT#e#S#t# "), ["test"]
Pseudocode:
  convert input str to lowercase
  split str on ', '
  map over array of strs
    remove 'uid'
    remove hashtags
    trim white space
  return mapped array of strs
*/

function getUsersIds(str) {
  return str.toLowerCase().split(', ').map(s => s.replace('uid', '').replace(/(?:#)/g, '').trim());
}