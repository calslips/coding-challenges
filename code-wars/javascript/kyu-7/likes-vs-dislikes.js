/*
YouTube had a like and a dislike button, which allowed users
to express their opinions about particular content. It was set
up in such a way that you cannot like and dislike a video at
the same time. There are two other interesting rules to be
noted about the interface: Pressing a button, which is already
active, will undo your press. If you press the like button
after pressing the dislike button, the like button overwrites
the previous "Dislike" state. The same is true for the other
way round.

Task
Create a function that takes in a list of button inputs and
returns the final state.

Examples
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing

Notes
If no button is currently active, return Nothing.
If the list is empty, return Nothing.

Parameters: an array of strs
  each str represents the state of like/dislike/nothing
Returns: a str
  the final state of like/dislike/nothing
Examples:
  likeOrDislike([Dislike]), Dislike
  likeOrDislike([Like,Like]), Nothing
  likeOrDislike([Dislike,Like]), Like
  likeOrDislike([Like,Dislike,Dislike]), Nothing
  likeOrDislike([Dislike,Dislike]), Nothing
  likeOrDislike([Like,Like,Like]), Like
  likeOrDislike([Like,Dislike]), Dislike
  likeOrDislike([Dislike,Like,Dislike]), Dislike
  likeOrDislike([Like,Like,Dislike,Like,Like,Like,Like,Dislike]), Dislike
  likeOrDislike([]), Nothing
Pseudocode:
  initialize state var assigned to str 'nothing'
  iterate over buttons
    if current button is equal to state
      reassign state to 'nothing'
    otherwise
      reassign state to current button
  return state
*/

function likeOrDislike(buttons) {
  let state = 'Nothing';
  for (let button of buttons) {
    if (button === state) state = 'Nothing';
    else state = button;
  }
  return state;
}