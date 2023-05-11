/*
Bob has written a function to detect the type of an object.
It receives any primitive values or objects, and returns its
object type as a string. But it seems to be working incorrectly.
Can you figure out why, and fix the code for him?

Parameters: any data type
Returns: str
  str describing arg data type in format of '[object Type]'
  (utilizing Object prototype's toString)
Examples:
  objectType(42), '[object Number]'
  objectType(false), '[object Boolean]'
  objectType(function(){return this;}), '[object Function]'
  objectType('Hello World!'), '[object String]'
  objectType({foo:'bar'}), '[object Object]'
  objectType([1,4,6,4,1]), '[object Array]'
  objectType(new Date(2012,11,21)), '[object Date]'
  objectType(new RegExp(/^_^/g)), '[object RegExp]'
  objectType(Math), '[object Math]'
  objectType(new Error('this kata is too awesome')), '[object Error]'
  objectType(Symbol('[native code]')), '[object Symbol]'
  objectType(NaN), '[object Number]'
  objectType(null), '[object Null]'
  objectType(undefined), '[object Undefined]'
  objectType(), '[object Null]'
Pseudocode:
  return result of passing arg into Object prototype's toString method
  (if an arg was passed into main fn, use that as thisArg, otherwise use null)
*/

function objectType(obj) {
  return Object.prototype.toString.call(arguments.length ? obj : null);
}