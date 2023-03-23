/*
So you've found a meeting room - phew! You arrive there ready to present,
and find that someone has taken one or more of the chairs!! You need to
find some quick.... check all the other meeting rooms to see if all of
the chairs are in use.

Your meeting room can take up to 8 chairs. need will tell you how many
have been taken. You need to find that many.

Find the spare chairs from the array of meeting rooms. Each meeting room
tuple will have the number of occupants as a string. Each occupant is
represented by 'X'. The room tuple will also have an integer telling you
how many chairs there are in the room.

You should return an array of integers that shows how many chairs you
take from each room in order, up until you have the required amount.

example:
[['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

result -> [0, 1, 3]
no chairs free in room 0, take 1 from room 1, take 3 from room 2.
no need to consider room 3 as you have your 4 chairs already.

If you need no chairs, return "Game On".
If there aren't enough spare chairs available, return "Not enough!".

Parameters:
  an array of tuples, each representing a room
    1st tuple element
      a string of X's, each representing an occupant
    2nd tuple element
      a number, the amount of chairs in the room
  a number
    how many chairs you need
Returns:
  if no chairs are needed
    return 'Game On'
  if not enough spare chairs
    return 'Not enough!'
  if able to gather enough chairs from the rooms
    return an array of numbers
    (each number represents the number of chairs
    taken from a respective room, totaling the need)
Examples:
  meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)
    // [0, 1, 3]
  meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)
    // [0, 0, 1, 2, 2]
  meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)
    // 'Game On'
  meeting([['X', 1], ['XXXX', 4], ['XXXXX', 5]], 2)
    // 'Not enough!'
Pseudocode:
  if need is 0
    return 'Game On'
  initialize found variable to equal 0
  initialize result variable to equal an empty array
  iterate over the input array of tuples
    within current tuple find the difference between string length and number (spares)
    define variable take assigned value based on conditional:
      if remaining need is less than spares found
        only take the number of chairs to fulfill need
      otherwise
        take all spares available
    add take amount to found
    push take amoount to result array
    if found is equal to need
      return result array
  return 'Not enough!'
*/

function meeting(x, need) {
  if (!need) return 'Game On';
  let found = 0, result = [];
  for (let [people, chairs] of x) {
    let spares = (d = chairs - people.length) > 0 ? d : 0;
    let take = (r = need - found) < spares ? r : spares;
    found += take;
    result.push(take);
    if (found === need) return result;
  }
  return 'Not enough!';
}