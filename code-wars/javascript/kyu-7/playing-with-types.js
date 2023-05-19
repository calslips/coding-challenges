/*
JavaScript is a dynamically typed programming language.
This means that you don't have to specify what kind of information
a variable contains, but sometimes it's useful to know it.

You have to implement a typing() function that takes a parameter
and is able to tell the type and value of it.

Parameters: any data type
Returns: str
  format 'type=value'
Examples:
  typing(2), "number=2"
  typing(true), "boolean=true"
  typing("test"), "string="test""
  typing([1,2,3]), "object=[1,2,3]"
  typing({a:1,b:2}), "object={"a":1,"b":2}"
  typing(function(){}), "function=function (){}"
  typing(undefined), "undefined"
Pseudocode:
  obtain data type of input
  if data type is undefined
    return str undefined
  otherwise
    return type str concatted with '=' and value
*/

function typing(p) {
  return (t = typeof p) + (p === undefined ? '' : `=${t === 'function' ? p.toString() : JSON.stringify(p)}`);
}