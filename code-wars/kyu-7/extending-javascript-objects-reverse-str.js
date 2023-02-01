/*
Unfortunately, there's no a .reverse() method for the JavaScript
String object.
Your task is to extend JavaScript String object, so you can
reverse strings just like this:

'Hello, World!'.reverse();
The method should return:

'!dlroW ,olleH'

Parameters: none
  create a reverse method for the Str obj
Returns: a str
  called on str reversed
Examples:
  'Hello, World!'.reverse(), '!dlroW ,olleH'
Pseudocode:
  create a reverse prop on the String prototype
  assign it the value of a function
    access the 'this' obj (called on str)
    convert to an array
    call the array reverse method
    join the array into a str
    return joined (reversed) str
*/

String.prototype.reverse = function() {
  return [...this].reverse().join('');
}