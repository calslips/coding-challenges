/**
 * Write a function that will convert a string into title case, given an
 * optional list of exceptions (minor words). The list of minor words will
 * be given as a string with each word separated by a space. Your function
 * should ignore the case of the minor words string -- it should behave in
 * the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

First argument: space-delimited list of minor words that must always be
lowercase except for the first word in the string.
Second argument: the original string to be converted.
###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must
always be lowercase except for the first word in the string.
The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
 */

function titleCase(t, m) {
  return t ? t.toLowerCase().split(' ').map((w, i) => i !== 0 && (m ? m.toLowerCase().split(' ').find(e => e === w) : '') ? w : w[0].toUpperCase() + w.slice(1)).join(' ') : '';
}

// function titleCase(title, minorWords) {
//   return title ? title.toLowerCase().split(' ').map((w, i) => i !== 0 && (minorWords ? minorWords.toLowerCase().split(' ').find(e => e === w) : '') ? w : w[0].toUpperCase() + w.slice(1)).join(' ') : '';
// }

// function titleCase(title, minorWords) {
//   return title ? title.split(' ').map((w, i) => i !== 0 && (minorWords ? minorWords.split(' ').find(e => e.toLowerCase() === w.toLowerCase()) : '') ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ') : '';
// }