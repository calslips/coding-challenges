/**
 *Your task is to remove all consecutive duplicate words from a string,
 leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
--> "alpha beta gamma delta alpha beta gamma delta"
 */

 const removeConsecutiveDuplicates = s => s.split(' ').reduce((p, c) => c === p[p.length - 1] ? p : p.concat(c), []).join(' ');