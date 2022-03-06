/*
King Arthur and his knights are having a New Years party. Last year Lancelot
was jealous of Arthur, because Arthur had a date and Lancelot did not, and
they started a duel.

To prevent this from happening again, Arthur wants to make sure that there
are at least as many women as men at this year's party. He gave you a list
of integers of all the party goers.

Arthur needs you to return true if he needs to invite more women or false
if he is all set.

Input/Output
[input] integer array L ($a in PHP)
An array (guaranteed non-associative in PHP) representing the genders of the
attendees, where -1 represents women and 1 represents men.

2 <= L.length <= 50

[output] a boolean value

true if Arthur need to invite more women, false otherwise.


Parameters: an array of numbers,
  where -1 represents a woman and 1 represents a man
Returns:
  true if there are less women than men
  false if the number of women is at least equal to number of men
Examples:
  inviteMoreWomen([1, -1, 1]) // true
  inviteMoreWomen([1, 1, 1]) // true
  inviteMoreWomen([-1, -1, -1]) // false
  inviteMoreWomen([1, -1]) // false
Pseudocode:
  add all of the elements together
    if sum is > 0 return true (needs to invite more women)
    otherwise return false (does NOT need to invite more women)
*/

function inviteMoreWomen(L) {
  return L.reduce((s, n) => s + n) > 0
}