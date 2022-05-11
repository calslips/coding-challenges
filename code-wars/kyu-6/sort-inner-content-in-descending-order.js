/**
 * You have to sort the inner content of every word of a string in descending order.

The inner content is the content of a word without first and the last char.

Some examples:

"sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me"        -->  "wiat for me"
"this kata is easy"  -->  "tihs ktaa is esay"
Words are made up of lowercase letters.

The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.
 */

function sortTheInnerContent(words) {
  return words.split(' ').map(w => w.length > 1 ? w[0] + [...w.slice(1, -1)].sort().reverse().join('') + w[w.length - 1] : w).join(' ');
}