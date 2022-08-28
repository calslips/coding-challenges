/*
Create a function that returns a christmas tree of the correct height.

For example:

height = 5 should return:
    *
   ***
  *****
 *******
*********
Height passed is always an integer between 0 and 100.

Use \n for newlines between each line.

Pad with spaces so each line is the same length.
The last line having only stars, no spaces.

Parameters: a number
Returns: a string
  contain the input number amount of lines
  separated by newline char '\n'
  each line containing asterisks &/or spaces, & all equal in length
  1st line 1 asterisk padded with spaces on each side
  last line all asterisks no space padding
Examples:
  christmasTree(0))
    // "\"\""
  christmasTree(1))
    // "\"*\""
  christmasTree(2))
    // "\" * \\n***\""
  christmasTree(3))
    // "\"  *  \\n *** \\n*****\""
  christmasTree(4))
    // "\"   *   \\n  ***  \\n ***** \\n*******\""
  christmasTree(5))
    // "\"    *    \\n   ***   \\n  *****  \\n ******* \\n*********\""
Pseudocode:
  initialize tree variable to equal an empty string
  iterate over the length of the input number
  (counter initialized to 0, padding size initialized to height - 1,
  increment counter & decrement padding size after each iteration)
    concat tree with
      a space repeated padding size times
      an asterisk repeated index doubled plus 1 times
      a space repeated padding size times
      newline char (except on last line/iteration)
  return tree
*/

function christmasTree(height) {
  let tree = [];
  for (let i = 0, ps = height - 1; i < height; i++, ps--) tree.push((p = ' '.repeat(ps)) + '*'.repeat(i * 2 + 1) + p);
  return tree.join('\n');
}

// function christmasTree(height) {
//   let tree = [];
//   for (let i = 0, p = height - 1; i < height; i++, p--) tree.push(' '.repeat(p) + '*'.repeat(i * 2 + 1) + ' '.repeat(p));
//   return tree.join('\n');
// }

// function christmasTree(height) {
//   let tree = '';
//   for (let i = 0, ps = height - 1; i < height; i++, ps--) {
//     tree += (p = ' '.repeat(ps)) + '*'.repeat(i * 2 + 1) + p + (i === height - 1 ? '' : '\n');
//   }
//   return tree;
// }