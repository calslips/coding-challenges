/*
String.prototype.hashify()
that will turn a string into a hash/object. Every character in the string
will be the key for the next character.

E.g.
'123456'.hashify() == {"1":"2","2":"3","3":"4","4":"5","5":"6","6":"1"}
  // The last char will be key for 1st char

'11223'.hashify() == {"1":["1","2"],"2":["2","3"],"3":"1"}
  // when duplicates exist, group them in an array
  // i.e. 1 is key for next char 1, that 1 is key for next char 2,
      but 1 is already in the hash, so add 2 to key 1

'Codewars'.hashify() ==
  {"C":"o","o":"d","d":"e","e":"w","w":"a","a":"r","r":"s","s":"C"}

Order is not important
There is a preloaded function equals(x,y) that will check if objects are
same regardless of property order.

Parameters: none,
  creating a string method to act on 'this'
Returns:
  convert called on string into an obj,
  current character = key
  next character = value
  (if current character is a duplicate,
  the value will be an array of the next characters)
  (when current character is the last character,
  the next character is the first character in the string)
Examples:
  '123456'.hashify()
    // {"1":"2","2":"3","3":"4","4":"5","5":"6","6":"1"}
  'Codewars'.hashify()
    // {"C":"o","o":"d","d":"e","e":"w","w":"a","a":"r","r":"s","s":"C"}
  'this is a string'.hashify()
    // {"t":["h","r"],"h":"i","i":["s","s","n"],"s":[" "," ","t"]," ":["i","a","s"],"a":" ","r":"i","n":"g","g":"t"}
  'racecar'.hashify()
    // {"r":["a","r"],"a":["c","r"],"c":["e","a"],"e":"c"}
Pseudocode:
  convert called on string to an array (each char its own element)
  reduce the str array into an object
    if current char exists as a key in the obj
      reassign the value to equal an array containing the previous value
      AND the next char in the array
    otherwise
      create a property in the obj where the key is the current char and
      the value is the next char
  return reduced obj
*/

String.prototype.hashify = function () {
  return [...this].reduce((o, k, i, a) => (o[k] ? o[k] = [...o[k], a[(i + 1) % a.length]] : o[k] = a[(i + 1) % a.length], o), {});
}
