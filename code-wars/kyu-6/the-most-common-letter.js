/*
Find the most common letter (not space) in the string(always lowercase and
  2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string
( earlier.

For example:
('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'

Parameters: two strings
  1st is a sentence
  2nd is a letter
Returns:
  the 1st string with its most freq char replaced with the 2nd arg
  (if there is a tie for most freq, select the char that appears first)
Examples:
  replaceCommon('my mom loves me as never did', 't') // 'ty tot loves te as never did'
  replaceCommon('real talk bro', 'n') // 'neal talk bno'
  replaceCommon('great job go ahead', 'k') // 'grekt job go khekd'
  replaceCommon('yyyaaa twwww ttt uuu ccca', 'p') // 'yyyppp twwww ttt uuu cccp'
Pseudocode:
  create a count object initialized as {}
  iterate over the length of the 1st arg string
    for every char (exclude ' '),
      check if property exists in count obj where char = key
        if exists, increment by 1
        if not, create prop with initial value of 1
  convert the count obj into an array of entries
  sort entries in descending order (value at index 1)
    if they are the same value, sort by ascending value of 1st index in 1st arg str
    (dont need to, the first highest value will be in the first position)
  replace every occurrence of the 1st value in the sorted entry array
    with the 2nd arg and return new str
*/

function replaceCommon(string, letter) {
  return (c = Object.entries((sA = [...string]).reduce((o, k) => k === ' ' ? o : (o[k] = ++o[k] || 1, o), {})).sort((a, b) => b[1] - a[1])[0][0]), sA.map(l => l === c ? letter : l).join('');
}

// function replaceCommon(string, letter) {
//   const o = (sA = [...string]).reduce((o, k) => k === ' ' ? o : (o[k] = ++o[k] || 1, o), {});
//   return (c = Object.entries(o).sort((a, b) => b[1] - a[1])[0][0]), sA.map(l => l === c ? letter : l).join('');
// }