/*
As part of a broader functionality you need to develop an
argument mapper.

The function receives a function object as first parameter and
an unknown number of arguments [zero to many]. You have to
return an associative array that maps the name of an argument
and its related value.

The usage is:

function func1(arg1, arg2) { ... }

var map = createArgumentMap(func1,'valueOfArg1', 'valueOfArg2');
console.log(map['arg1']);  // writes 'valueOfArg1'
console.log(map['arg2']);  // writes 'valueOfArg2'

The passed values are in the same order as they appear in the
function object.

Invalid inputs, e.g. non-function objects, or wrong number of
arguments, are not considered.

Parameters:
  a function
  values, args to be passed into function
    (various data types)
Returns: an object
  mapping func params to actual arg values
Examples:
  const ft1 = createArgumentMap(function(){});
  Object.keys(ft1).length == 0

  const ft2 = createArgumentMap(function(a1){},'a1 argvalue');
  Object.keys(ft2).length == 1
  ft2['a1'] === 'a1 argvalue'
Pseudocode:
  apparently the param names won't vary and progress as
    'a1', 'a2', ..., 'aN'
  collect all args after fn arg
  initialize an empty obj
  iterate over the args array
    store current arg as a value in obj, with the key 'a' + arg number (1-N);
    (using index incremented by 1 to preserve order value)
  return obj
*/

function createArgumentMap(func, ...args) {
  return args.reduce((m, v, i) => (m[`a${++i}`] = v, m), {});
}

function createArgumentMap(func, ...args) {
  const fnStr = func.toString(), fnParams = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'));
  return fnParams ? fnParams.split(',').reduce((m, p, i) => (m[p] = args[i], m), {}) : [];
}