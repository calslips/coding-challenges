/*
You'll have a function called "sortEmotions" that will return an array
of emotions sorted. It has two parameters, the first parameter called
"arr" will expect an array of emotions where an emotion will be one of
the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad
Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true
then the order of the emotions will be descending (from Super Happy to
  Super Sad) if it's false then it will be ascending (from Super Sad to
    Super Happy)

Example if order is true with the above array:
[ ':D', ':)', ':|', ':(', 'T_T' ]

Super Happy -> Happy -> Normal -> Sad -> Super Sad
If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

Super Sad -> Sad -> Normal -> Happy -> Super Happy
Example:

arr = [':D', ':|', ':)', ':(', ':D']
sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
More in test cases!

Notes:

The array could be empty, in that case return the same empty array
¯\_( ツ )_/¯
All emotions will be valid

Parameters:
  an array of 'emotions' (can be empty)
  a boolean
    true to sort emotions from happiest to saddest
    false to sort emotions from saddest to happiest
Returns: an array of 'emotions' (or empty)
  sorted according to the order
Examples:
  sortEmotions([ ':D', 'T_T', ':D', ':(' ], true)
    // [ ':D', ':D', ':(', 'T_T' ]
  sortEmotions([ 'T_T', ':D', ':(', ':(' ], true)
    // [ ':D', ':(', ':(', 'T_T' ]
  sortEmotions([ ':)', 'T_T', ':)', ':D', ':D' ], true)
    // [ ':D', ':D', ':)', ':)', 'T_T' ]
  sortEmotions([ ':D', 'T_T', ':D', ':(' ], false)
    // [ 'T_T', ':(', ':D', ':D' ]
  sortEmotions([ 'T_T', ':D', ':(', ':(' ], false)
    // [ 'T_T', ':(', ':(', ':D' ]
  sortEmotions([ ':)', 'T_T', ':)', ':D', ':D' ], false)
    //  [ 'T_T', ':)', ':)', ':D', ':D' ]
  sortEmotions([], false) // []
  sortEmotions([], true) // []
Pseudocode:
  initialize a reference array of emotions arranged from happiest to saddest
  if order is true
    sort the input array according to the reference array order
  if order is false
    sort the input array according to the reverse of reference array order
  return sorted array
*/

function sortEmotions(arr, order) {
  const ref = [':D', ':)', ':|', ':(', 'T_T'];
  return arr.sort((a, b) => order ? ref.indexOf(a) - ref.indexOf(b) : ref.indexOf(b) - ref.indexOf(a));
}