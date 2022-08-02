/**
 *Write the definition of the function "say" such that calling this:
say("Hello")("World")
returns "Hello World"
 */

var say = function(s1) {
  return s2 => [s1, s2].join(' ');
}

// var say = function(s1) {
//   return s2 => `${s1} ${s2}`;
//   return s2 => s1 + ' ' + s2;
//   return s2 => [s1, s2].join(' ');
//   return s2 => s1.concat(s2).join(' ');
// }