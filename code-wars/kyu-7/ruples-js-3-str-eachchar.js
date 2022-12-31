/*
String.eachChar()
In ruby you can add something after each character in a string like so:

"hello".each_char {|c| print c, ' ' } -> "h e l l o "
In the spirit of polymorphism, our eachChar method will allow one of two
arguments, a callback function or a string. If a string is presented, it
will be added after each character of the original string and return the
new string. If a function is presented, it will perform a manipulation
of each character in the string.

Parameters:
  'this' will be a str
  method takes in either a str of fn as an arg
Returns:
  if arg is a str
    adds arg str after each char within 'this'
  if arg is a fn
    call fn on each char of 'this'
Examples:
  "hello".eachChar(" ");
  -> "h e l l o "

  "hello all".eachChar(function(char) {
    if (char == "l") {
      return char.toUpperCase();
    } else {
      return char;
    }
  });
  -> "heLLo aLL"
Pseudocode:
  initialize a result var assigned to an empty str
  create a loop to run over the length of 'this'
    if arg is a str
      concat result with current char and arg
    otherwise if arg is a fn
      concat result with return value of fn called on current char
  return result
*/

String.prototype.eachChar = function (strOrFn) {
  let result = '';
  for (let i = 0; i < this.length; i++) {
    if (typeof strOrFn === 'string') result += this[i] + strOrFn;
    else if (typeof strOrFn === 'function') result += strOrFn(this[i]);
  }
  return result;
}