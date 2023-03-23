/**
 * Complete the method/function so that it converts dash/underscore delimited words
 * into camel casing. The first word within the output should be capitalized only if
 * the original word was capitalized (known as Upper Camel Case, also often referred
 * to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 */

function toCamelCase(str){
  const words = str.includes('-') ? str.split('-') : str.split('_');
  return words.map((word, i) => i > 0 ? word.split('')[0].toUpperCase().concat(word.slice(1)) : word).join('');
}

// function toCamelCase(str){
//   return str.split(str.includes('-') ? '-' : '_').map((e, i) => i > 0 ? e[0].toUpperCase().concat(e.slice(1)) : e).join('');
// }