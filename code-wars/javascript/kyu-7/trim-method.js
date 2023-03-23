/*
The trim() method removes whitespace from both sides of a string.

In this kata we are going to extend the trim method to be able to
remove any character(upper and lower cases) from both sides of a string.

Task:
Create a method called trim which removes the passed parameter c
(upper and lower cases) from the leading and tailing of the string.

Note:
1- If no parameter is being passed you need to remove the leading and tailing spaces.
2- The passed parameter will only be alphabet(upper and lower cases) characters.

Examples:
string = "LLLHello Worldlll" and c = "l" => "Hello World"
string = "Visca ElbarcaXxX" and c = "X" => "Visca Elbarca"

Parameters: a str (single char)
Returns: a str
  the called on str with occurrences of
  arg removed from both start & end
Examples:
  "LLLHello Worldlll".trim("l"), "Hello World"
  "   Hello World                 ".trim(), "Hello World"
  "XVisca ElbarcaXX".trim("X"), "Visca Elbarca"
Pseudocode:
  initialize a loop to run as long as this starts with arg OR space if no arg
    reassign this to equal slice of this from 2nd char through end
  initialize a loop to run as long as this ends with arg OR space if no arg
    reassign this to eqaul slice of this from 0 to last char (exclusive)
  return this
*/

String.prototype.trim = function (c) {
  let result = this.toString();
  while (
    result.startsWith(c?.toLowerCase()) ||
    result.startsWith(c?.toUpperCase()) ||
    (!c && result.startsWith(' '))
  )
    result = result.slice(1);
  while (
    result.endsWith(c?.toLowerCase()) ||
    result.endsWith(c?.toUpperCase()) ||
    (!c && result.endsWith(' '))
  )
    result = result.slice(0, -1);
  return result;
};
