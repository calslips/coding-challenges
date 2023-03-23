/**
 *Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

function solution(string) {
  return string.split('').map(c => c < 'a' ? ` ${c}` : c).join('');
}

// function solution(string) {
//   const strArr = string.split('');
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] < 'a') {
//       strArr.splice(i, 0, ' ');
//       i++;
//     }
//   }
//   return strArr.join('');
// }
