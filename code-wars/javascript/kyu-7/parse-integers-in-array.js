/**
 * A colleague asked if you can help him fix his function.
 * It seems it doesn't always parse Integers correctly.
 *
 * Function converts array of string to array of integers.
 * @param  {Array} of numbers in form of string
 * @return {Array} of integer numbers

  Examples:
    parseNumbers([]), []
    parseNumbers(['13']), [13]
    parseNumbers(['2.48']), [2]
    parseNumbers(['10']), [10]
    parseNumbers(['-1','0','1']), [-1,0,1]
  Pseudocode:
    original
      parseInt was passed in as a callback to map
      however, map provides 3 params (current el, index, array)
      this leads to parseInt being called with
        current el to be parsed AND index as radix which is causing issues
    fix
      wrap an arrow fn around parseInt
      isolate only the current el (strNum) and
        pass it directly to parseInt as the lone arg
 */

const parseNumbers = function(intStrs) {
  return intStrs.map(e => parseInt(e));
}