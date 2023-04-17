/*
Let's make a function that returns a new object, containing all
of the properties of any objects passed in as parameters.

The returned object should include the first instance of each
property seen on any parameter object, and any other instance of
that property should be ignored.

Also, if any parameter is not an object, it should be ignored.
You can use the function isObject(object) to determine if a
parameter is an object or not (it will return true or false).

Paramters: 1 or more objects
Returns: a single object
  containing all unique props from input objects
  1st occurrence takes precedence over repeats
Examples:
  extend( {a: 1, b: 2}, {c: 3} ), {a: 1, b: 2, c: 3}
  extend( {a: 1, b: 2}, {c: 3}, {d: 4} ), {a: 1, b: 2, c: 3, d: 4}
  extend( {a: 1, b: 2}, {a: 3, c: 3} ), {a: 1, b: 2, c: 3}
  extend( {a: false, b: null}, {a: true, b: 2, c: 3} ), {a: false, b: null, c: 3}
  extend( {a: 1, b: 2}, {c: 3} , {d: 5} ), {a: 1, b: 2, c: 3, d: 4}
Pseudocode:
  collect all args
  initialize main var as 1st arg if it is an obj or an empty obj otherwise
  iterate over the remaining args
    if current arg is an obj
      convert obj to an array of its entries
      for each entry
        if current key does not exist in main
          set main obj to contain key and associated value
  return main obj
*/

const extend = function(...args) {
  return args.filter(isObject).reduce((m, o) => (Object.keys(o).forEach(k => !(k in m) && (m[k] = o[k])), m), {});
}