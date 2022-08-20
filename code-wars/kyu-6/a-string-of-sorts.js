/**
 *Define a method that accepts 2 strings as parameters.
 The method returns the first string sorted by the second.

sortString("foos", "of")       => "oofs"
sortString("string", "gnirts") => "gnirts"
sortString("banana", "abn")    => "aaabnn"
To elaborate, the second string defines the ordering.
It is possible that in the second string characters repeat,
so you should remove repeating characters,
leaving only the first occurrence.

Any character in the first string that does not appear in the second
string should be sorted to the end of the result in original order.
 */

function sortString(s, o) {
  return [...s].sort((a, b) => o.includes(a) && o.includes(b) ? o.indexOf(a) - o.indexOf(b) : o.includes(a) ? -1 : o.includes(b) ? 1 : 0).join('');
}

// function sortString(string, ordering) {
//   return [...string].sort((a, b) => ordering.includes(a) && ordering.includes(b)
//     ? ordering.indexOf(a) - ordering.indexOf(b)
//     : ordering.includes(a)
//       ? -1
//       : ordering.includes(b)
//         ? 1
//         : 0
//   ).join('');
// }

// function sortString(string, ordering) {
//   return [...string].sort((a, b) => ordering.includes(a) && ordering.includes(b)
//     ? ordering.indexOf(a) - ordering.indexOf(b)
//     : ordering.includes(a) && !ordering.includes(b)
//       ? -1
//       : !ordering.includes(a) && ordering.includes(b)
//         ? 1
//         : 0
//   ).join('');
// }