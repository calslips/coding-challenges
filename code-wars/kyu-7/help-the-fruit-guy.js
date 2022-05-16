/**
 * Our fruit guy has a bag of fruit (represented as an array of strings)
 * where some fruits are rotten. He wants to replace all the rotten pieces
 * of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"]
 * the replaced array should be ["apple","banana","apple"]. Your task is to
 * implement a method that accepts an array of strings containing fruits should
 * returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.


Parameters: An array of strings that represent fruits, some may be rotten or fresh
Returns: an array with any rotten fruits replaced by fresh ones, empty array if arg is null/undefined/empty
Examples:
  removeRotten(["apple","banana","kiwi","melone","orange"]) // ["apple","banana","kiwi","melone","orange"]
  removeRotten(["apple","rottenBanana","kiwi","rottenOrange"]) // ["apple","banana","kiwi","orange"]
  removeRotten([]) // []
Pseudocode:
  if input array exists
    map over input array
      check if current element starts with 'rotten'
        if it does, remove rotten and lowercase the fruit name
        otherwise keep element the same
    return mapped array
  otherwise return empty array
 */

function removeRotten(bagOfFruits) {
  return bagOfFruits ? bagOfFruits.map(f => f.startsWith('rotten') ? f.slice(6).toLowerCase() : f) : [];
}