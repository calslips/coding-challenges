/*
A family of kookaburras are in my backyard.
I can't see them all, but I can hear them!
How many kookaburras are there?

Hint
The trick to counting kookaburras is to listen carefully
The males sound like HaHaHa...
The females sound like hahaha...
And they always alternate male/female

Examples
ha = female => 1
Ha = male => 1
Haha = male + female => 2
haHa = female + male => 2
hahahahaha = female => 1
hahahahahaHaHaHa = female + male => 2
HaHaHahahaHaHa = male + female + male => 3

Kata Note:
No validation is necessary; only valid input will be passed

Parameters: a str
Returns: a num
Examples:
  kookaCounter(""), 0
  kookaCounter("hahahahaha"), 1
  kookaCounter("hahahahahaHaHaHa"), 2
  kookaCounter("HaHaHahahaHaHa"), 3
Pseudocode:
  initialize a count var assigned to 0
  iterate over the str, 2 chars at a time
    if current value does NOT equal value 2 indices prior
      increment count
  return count
*/

const kookaCounter = function(laughing) {
  return laughing.split('a').filter(Boolean).reduce((c, k, i, a) => k === a[--i] ? c : ++c, 0);
}

const kookaCounter = function(laughing) {
  let count = 0;
  for (let i = 0; i < laughing.length; i += 2) if (laughing[i] !== laughing [i - 2]) count++;
  return count;
}