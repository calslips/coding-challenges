/*
Santa is learning programming. And what could be the first
program, he wants to write? Yes, the "Hello world!" of Christmas:
"Ho Ho Ho!". He wants to write a function ho(), which should have
the following return values:

ho(); // should return "Ho!"
ho(ho()); // should return "Ho Ho!"
ho(ho(ho())); // should return "Ho Ho Ho!"

Unfortunately he couldn't find any tutorial, which explains, how
he could implement that. Can you help him?

Rules:
each call of ho() must add a "Ho" to the string
the "Ho"'s must be separated by a space
at the end of the string, there must be an exclamation mark (!),
without a space

Parameters: a fn or nothing
Returns: a str
Examples:
  ho(), 'Ho!'
  ho(ho()), 'Ho Ho!'
  ho(ho(ho())), 'Ho Ho Ho!'
Pseudocode:
  if arg fn exists
    return str Ho + space + return of arg fn
  otherwise
    return str Ho + exclamation mark
*/

function ho(f) {
  return `Ho${f ? ` ${f}` : '!'}`;
}