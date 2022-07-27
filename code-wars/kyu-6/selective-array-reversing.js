/**
 *Given an array, return the reversed version of the array (a different
  kind of reverse though), you reverse portions of the array, you'll be
  given a length argument which represents the length of each portion you
  are to reverse.

E.g
selReverse([1,2,3,4,5,6], 2)
 //=> [2,1, 4,3, 6,5]

if after reversing some portions of the array and the length of the
remaining portion in the array is not up to the length argument, just
reverse them.
selReverse([2,4,6,8,10,12,14,16], 3)
 //=> [6,4,2, 12,10,8, 16,14]

selReverse(array, length)
array - array to reverse
length - length of each portion to reverse

Note : if the length argument exceeds the array length, reverse all of
them, if the length argument is zero do not reverse at all.
 */

function selReverse(a, l) {
  return l ? a.reduce((r, _, i) => (r.push(...a.slice(i * l, ++i * l).reverse()), r), []) : a;
}

// function selReverse(a, l) {
//   return !l ? a : a.reduce((r, _, i) => (r.push(...a.slice(i * l, ++i * l).reverse()), r), []);
// }

// function selReverse(a, l) {
//   return !l ? a : l > a.length ? a.reverse() : a.reduce((r, _, i) => (r.push(...a.slice(i * l, ++i * l).reverse()), r), []);
// }

// function selReverse(array, length) {
//   if (!length) return array;
//   if (length > array.length) return array.reverse();
//   const reversed = [];
//   for (let i = 0; reversed.length !== array.length; i += length) {
//     reversed.push(...array.slice(i, i + length).reverse());
//   }
//   return reversed;
// }

// function selReverse(array, length) {
  // if (!length) return array;
  // if (length > array.length) return array.reverse();
  // const reversed = [];
  // while (array.length) {
  //   reversed.push(...array.splice(0, length).reverse());
  // }
  // return reversed;
// }

// function selReverse(array, length) {
  // if (!length) return array;
  // if (length > array.length) return array.reverse();
  // let reversed = [];
  // while (array.length) {
  //   reversed = [...reversed, ...array.splice(0, length).reverse()];
  // }
  // return reversed;
// }