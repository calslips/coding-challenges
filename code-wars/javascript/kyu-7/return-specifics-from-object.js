/*
Create a function that returns the values of an object which are
numbers, and the keys of objects which have methods as values.

array should return numbers first then all the method names in
the order they are in the object
strings, booleans, arrays should be ignored.
if the object is empty, then the array should return the
following string: The Object is Empty

Example:
returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
This would return [1,2,3,'e']

Parameters: an obj
Returns: an array
  containing the num values from obj
  and keys that contain fns
  if obj was empty
    return array to contain str 'The Object is Empty'
Examples:
  returnSpecifics({a:1,b:2,c:3,d:'d',e:"dsds",add:function(a,b){return a+b;},g:34}),
    [1,2,3,34,'add']
  returnSpecifics({a:10,b:-20,c:true,d:'d',e:50,subtract:function(a,b){return a-b;},g:100}),
    [10,-20,50,100,'subtract']
  returnSpecifics({a:44456,b:999,c:true,d:'d',e:5094430,arr:[1,2,3],g:1980700}),
    [44456,999,5094430,1980700]
  returnSpecifics({add:function(a,b){return a+b;},b:[3,5,6],c:true,d:'d',double:function(a){return a*a},subtract:function(a,b){return a-b;},g:false}),
    ['add','double','subtract']
  returnSpecifics({}),
    ["The Object is Empty"]
Pseudocode:
  initialize a nums var assigned to an empty array
  initialize a fn keys var assigned to an empty array
  convert obj to an array of keys
  if obj keys array is empty
    return ['The Object is Empty']
  iterate over the keys of the input obj
    if the current key has a num value
      push value to nums
    otherwise if current key has a fn value
      push key to fn keys
  return nums array concatted with fn keys array
*/

function returnSpecifics(obj) {
  const nums = [], keys = [], entries = Object.entries(obj);
  if (!entries.length) return ['The Object is Empty'];
  entries.forEach(([k, v]) => typeof v === 'number' && nums.push(v) || typeof v === 'function' && keys.push(k));
  return [...nums, ...keys];
}

function returnSpecifics(obj) {
  const nums = [], fnKeys = [], keys = Object.keys(obj);
  if (!keys.length) return ['The Object is Empty'];
  keys.forEach(k => typeof obj[k] === 'number' && nums.push(obj[k]) || typeof obj[k] === 'function' && fnKeys.push(k));
  return [...nums, ...fnKeys];
}