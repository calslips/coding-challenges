/**
 *Count the number of occurrences of each character and return it as a
 list of tuples in order of appearance. For empty output return an empty
 list.

Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
 */

var orderedCount = function(text) {
  return [...text].reduce((ts, c) => (i = ts.findIndex(e => e[0] === c)) >= 0 ? (ts[i][1]++, ts) : (ts.push([c, 1]), ts), []);
}