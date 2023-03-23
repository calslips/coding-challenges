/**
 * Given a string, swap the case for each of the letters.

Examples
""           -->   ""
"CodeWars"   -->   "cODEwARS"
"abc"        -->   "ABC"
"ABC"        -->   "abc"
"123235"     -->   "123235"
 */

function swap(str) {
  return [...str].map(l => l === l.toLowerCase() ? l.toUpperCase() : l.toLowerCase()).join('');
}