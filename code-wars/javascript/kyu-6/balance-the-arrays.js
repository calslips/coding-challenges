/**
 *Check that the two provided arrays both contain the same number of
 different unique items, regardless of order. For example in the following:
[a,a,a,a,b,b] and [c,c,c,d,c,d]
Both arrays have four of one item and two of another, so balance should
return true.
 */

function balance(arr1, arr2) {
  return ([c1, c2] = [arr1, arr2].map(a => a.reduce((o, k) => (o[k] = ++o[k] || 1, o), {})).map(o => Object.values(o).sort((a, b) => a - b).join())) && c1 === c2;
}

// function balance(arr1, arr2) {
//   const [c1, c2] = [arr1, arr2].map(a => a.reduce((o, k) => (o[k] = ++o[k] || 1, o), {})).map(o => Object.values(o).sort((a, b) => a - b));
//   return c1.length === c2.length && c1.every((e, i) => e === c2[i]);
// }