/**
 * Program channels into your TV's memory. An array with channels (strings)
 * will be passed as an argument to the function redarr(). Sort the channels
 * in an alphabetical order, remove duplicates and, finally, return an object
 * where each channel (object's value) is assigned to a whole number
 * (objects's key), starting with 0.

Examples:

var arr = ["BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

var arr = ["BBC1", "BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
 */

// function redarr(arr) {
//   return Object.assign({}, [...new Set(arr)].sort());
// }

function redarr(arr) {
  return [...new Set(arr)].sort().reduce((p, c, i) => Object.assign(p, {[i]: c}), {})
}

// function redarr(arr) {
//   const channels = {};
//   [...new Set(arr)].sort().forEach((ch, i) => channels[i] = ch);
//   return channels;
// }