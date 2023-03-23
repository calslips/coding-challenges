/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and
wants a diamond string from James. Since James doesn't know how to make
this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed
on the screen, using asterisk (*) characters. Trailing spaces should be
removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as
it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"

Parameters: a number
Returns:
  if input number is >0 and ODD:
    a string
    (formatted so that when it prints to the screen,
    it displayes a 'diamond' consisting of asterisks.
    its widest part equats to input number)
  if <0 or EVEN:
    null
    (cannot print a negative or even diamond)
Examples:
  diamond(1) // "*\n"
  diamond(3) // " *\n***\n *\n"
  diamond(5) // "  *\n ***\n*****\n ***\n  *\n"
  diamond(2) // null
  diamond(-3) // null
  diamond(0) // null
Pseudocode:
  if input number is negative or even
    return null
  initialize diamond variable to equal an array,
    length = number arg / 2 rounded up
  iterate over diamond array
    repeat space, array length - (index + 1) times
    concatted with
    repeat asterisk, index doubled + 1
    concatted with
    newline char
  return diamond array joined on empty string,
    concatted with diamond array sliced from beginning to end (not inclusive),
      reversed and joined on empty string
*/

function diamond(n) {
  return n >= 0 && n % 2 ? (d = Array.from({length: l = Math.ceil(n / 2)}, (_, i) => ' '.repeat(l - (i + 1)) + '*'.repeat(i * 2 + 1) + '\n')).join('') + d.slice(0, -1).reverse().join('') : null;
}

// function diamond(n) {
//   if (n < 0 || !(n % 2)) return null;
//   const d = Array(Math.ceil(n / 2)).fill();
//   for (let i = 0; i < d.length; i++) d[i] = ' '.repeat(d.length - (i + 1)) + '*'.repeat(i * 2 + 1) + '\n';
//   return d.join('') + d.slice(0, -1).reverse().join('');
// }