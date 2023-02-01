/*
Given a string and an object/array you need to return a formatted
string. Replace all occurrences in the string where the name of a
key in the object is surrounded by curly brackets.
Inherited object properties should not be applied
An example says more than a thousand words..

Example using object

var s = 'Hello {foo} - make me a {bar}';
var o = {
  foo : 'Jack',
  bar : 'sandwich'
};

format(s, o); // "Hello Jack - make me a sandwich"

Example using array

var s = 'Hello {0} - make me a {1}';
var a = ['Jack', 'sandwich'];

format(s, a); // "Hello Jack - make me a sandwich"

Parameters:
  a str
  an obj/array
Returns: a str
  keys replaced with their respective values
Examples:
  format('Hello {foo} - make me a {bar}', { foo : 'Jack', bar : 'sandwich' }),
    "Hello Jack - make me a sandwich"
  format('Hello {foo} - {foobar} make me a {bar}', { foo : 'Jack', bar : 'sandwich' }),
    "Hello Jack - {foobar} make me a sandwich"
  format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', { foo : 'Jack', bar : 'sandwich' }),
    "Hello Jack - {foobar} make me a sandwich... Jack!!?"
  format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', { bar : 'sandwich {foo}', foo : 'Jack' }),
    "Hello Jack - {foobar} make me a sandwich {foo}... Jack!!?"
  format('Hello {0} - {foobar} make me {2} {1} - I\'m full..', ['Jack', 'sandwiches', 0]),
    "Hello Jack - {foobar} make me 0 sandwiches - I\'m full.."
Pseudocode:
  initialize a result var assigned to an empty str
  iterate over the input str (while it has a length)
    initialize an open var assigned to the index of the 1st open curly brace
    intialize a close var assigned to the index of the 1st closing curly brace
    if either open or close dont exist within str
      concat result with the rest of str
      break out of loop
    initialize a snippet var assigned to portion of str from beginning to closing curly brace
    if part of snippet between open and close exists as a property in input obj
      replace with its value
    otherwise
      leave it alone
    concat result with snippet
    reassign str to equal the remaining str AFTER closing curly brace
  return result str
*/

const format = function (str, obj) {
  let result = '';
  while (str) {
    const open = str.indexOf('{'), close = str.indexOf('}');
    if (open === -1 || close === -1) {
      result += str;
      break;
    }
    let snippet = str.slice(0, close + 1);
    if ((key = snippet.slice(open + 1, close)) in obj) {
      snippet = snippet.slice(0, open) + obj[key];
    }
    result += snippet;
    str = str.slice(close + 1);
  }
  return result;
};

const format = (s, o) => (Object.keys(o).reverse().forEach(k => s = s.split(`{${k}}`).join(o[k])), s);