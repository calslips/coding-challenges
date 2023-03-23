/**
 *Find the most common Data Type within a given array.

For Example, ['1', '2', 2] should return 'string'.

If there are any ties at all then just return 'We got a tie!'
 */

class CommonDatatypes {
  check(arr) {
    const sortedCount = Object.entries(arr.map(e => typeof e).reduce((p, c) => Object.assign(p, {[c]: (p[c] || 0) + 1}), {})).sort((a, b) => b[1] - a[1]);
    return sortedCount[0][1] === sortedCount[1][1] ? 'We got a tie!' : sortedCount[0][0];
  }
}