/**
 * Move the first letter of each word to the end of it, then add "ay" to
 * the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
 */

function pigIt(str) {
  return str.split(' ').map(w => {
    let letters = w.split('');
    w.match(/[a-z]/ig) && letters.push(letters.shift(), 'a', 'y');
    return letters.join('');
  }).join(' ');
}