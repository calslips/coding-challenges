/*
Define a function trim (JavaScript: method String.prototype.trim)
which removes all forms of leading and trailing whitespace from a
given string. Please refer to the Sample Tests for more examples.

Note:
The built-in trim, trimLeft && trimRight methods has been disabled.

Parameters: a string
Returns: a string
  with leading & trailing spaces removed
Examples:
  "foo      ".trim() // "foo"
  "      foo".trim() // "foo"
  "      foo      ".trim() // "foo"
  "foo    bar".trim() // "foo    bar"
  "    ".trim() // ""
Pseudocode:
  assign string var to equal this
  iterate over the string from start to end
    if current is a space
      reassign string to equal itself with current removed
    otherwise
      break
  iterate over the string from end to start
    if current is a space
      reassign string to equal itself with current removed
    otherwise
      break
  return string
*/

String.prototype.trim = function() {
  let s = this.toString();
  while (' \n\r\t'.includes(s[0])) s = s.slice(1);
  while (' \n\r\t'.includes(s[s.length - 1])) s = s.slice(0, s.length - 1);
  return s;
};