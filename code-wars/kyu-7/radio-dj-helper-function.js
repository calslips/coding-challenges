/*
James is a DJ at a local radio station. As it's getting to the
top of the hour, he needs to find a song to play that will be
short enough to fit in before the news block. He's got a database
of songs that he'd like you to help him filter in order to do that.

What To Do
Create longestPossible(longest_possible in python and ruby) helper
function that takes 1 integer argument which is a maximum length
of a song in seconds.

songs is an array of objects which are formatted as follows:

{artist: 'Artist', title: 'Title String', playback: '04:30'}
You can expect playback value to be formatted exactly like above.

Output should be a title of the longest song from the database
that matches the criteria of not being longer than specified time.
If there's no songs matching criteria in the database, return false.

Parameters: a num (time in seconds)
Returns: a str
  title of the longest song within db
  that can be played within input time
Examples:
  longestPossible(215), "For Reasons Unknown"
Pseudocode:
  initialize a longest var assigned to null
  iniitalize a title var assigned to a false
  iterate over the songs in the db
    convert playback str into a numerical value (time in seconds)
      split on colon, multiply value at index 0 by 60, add to value at index 1
    if playback time in sec is less than input num AND
    greater than longest
      reassign longest to equal playback time in sec
      reassign title to current song title
  return title
*/

function longestPossible(playback) {
  let longest = null, title = false;
  for (const song of songs) {
    const time = (t = song.playback.split(':'))[0] * 60 + +t[1];
    if (time < playback && time > longest) longest = time, title = song.title;
  }
  return title;
}