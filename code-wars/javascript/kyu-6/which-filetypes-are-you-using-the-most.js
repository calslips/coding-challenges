/*
You've been working with a lot of different file types recently
as your interests have broadened.
But what file types are you using the most? With this question
in mind we look at the following problem.

Given a List/Array of Filenames (strings) files return a
List/Array of string(s) containing the most common extension(s).
If there is a tie, return a sorted list of all extensions.

Important Info:
Don't forget, you've been working with a lot of different file
types, so expect some interesting extensions/file names/lengths
in the random tests.
Filenames and extensions will only contain letters (case
  sensitive), and numbers.
If a file has multiple extensions (ie: mysong.mp3.als) only count
the last extension (.als in this case)

Examples
files = ['Lakey - Better days.mp3',
         'Wheathan - Superlove.wav',
         'groovy jam.als',
         '#4 final mixdown.als',
         'album cover.ps',
         'good nights.mp3']
would return: ['.als', '.mp3'], as both of the extensions appear
two times in files.

files = ['Lakey - Better days.mp3',
         'Fisher - Stop it.mp3',
         'Fisher - Losing it.mp3',
         '#4 final mixdown.als',
         'album cover.ps',
         'good nights.mp3']
would return ['.mp3'], because it appears more times then any other
extension, and no other extension has an equal amount of appearences.

Parameters: an array of strings
Returns: an array of string(s)
  the element will be the most frequently occurring
  file extension (or elements if there is a tie,
  sorted alphabetically)
Examples:
  files = ['Lakey - Better days.mp3',
         'Wheathan - Superlove.wav',
         'groovy jam.als',
         '#4 final mixdown.als',
         'album cover.ps',
         'good nights.mp3']
  solve(files)
    // ['.als', '.mp3']
  files = ['Lakey - Better days.mp3',
         'Fisher - Stop it.mp3',
         'Fisher - Losing it.mp3',
         '#4 final mixdown.als',
         'album cover.ps',
         'good nights.mp3']
  solve(files)
    // ['.mp3']
Pseudocode:
  initialize a count variable assigned to an empty object
  create an extensions array to hold all the file exts from the files array
  iterate over the exts array
    check if it exists in the count obj
      if it does,
        increment its value by 1
      if not,
        add it as a key with a value of 1
  convert the count obj into an array of entries
  filter the entries array to keep entries with the max count value
  sort the filtered array (alphabetically)
  return the sorted filtered array
*/

function solve(files) {
  const count = files.reduce((p, c) => (e = c.slice(c.lastIndexOf('.'))) && (p[e] = ++p[e] || 1) && p, {}),
        max = Math.max(...Object.values(count));
  return Object.keys(count).filter(k => count[k] === max).sort();
}

// function solve(files) {
//   const count = {};
//   const exts = files.map(f => f.slice(f.lastIndexOf('.')));
//   exts.forEach(ext => count[ext] = ++count[ext] || 1 );
//   const max = Math.max(...Object.values(count));
//   return Object.entries(count).filter(e => e[1] === max).map(e => e[0]).sort();
// }

  // return Object.entries(count).reduce((p, c) => c[1] === max ? p.concat(c[0]) : p, []).sort();