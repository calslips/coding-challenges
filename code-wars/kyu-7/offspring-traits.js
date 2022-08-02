/**
 * A population of bears consists of black bears, brown bears, and white bears.

The input is an array of two elements.

Determine whether the offspring of the two bears will return
  'black', 'brown', 'white', 'dark brown', 'grey', 'light brown', or 'unknown'.

Elements in the the array will always be a string.

Examples:
bear_fur(['black', 'black'])  returns 'black'

bear_fur(['brown', 'brown'])  returns 'brown'

bear_fur(['white', 'white'])  returns 'white'

bear_fur(['black', 'brown'])  returns 'dark brown'

bear_fur(['black', 'white'])  returns 'grey'

bear_fur(['brown', 'white'])  returns 'light brown'

bear_fur(['yellow', 'magenta'])  returns 'unknown'
 */

const bearFur = (bears) => {
  if (bears.every(b => b === 'black')) return 'black';
  else if (bears.every(b => b === 'brown')) return 'brown';
  else if (bears.every(b => b === 'white')) return 'white';
  else if (bears[0] === 'black' && bears[1] === 'brown' || bears[0] === 'brown' && bears[1] === 'black') return 'dark brown';
  else if (bears[0] === 'black' && bears[1] === 'white' || bears[0] === 'white' && bears[1] === 'black') return 'grey';
  else if (bears[0] === 'brown' && bears[1] === 'white' || bears[0] === 'white' && bears[1] === 'brown') return 'light brown';
  else return 'unknown';
};