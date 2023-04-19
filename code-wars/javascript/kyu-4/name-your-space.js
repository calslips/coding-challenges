/*
Finish the namespace function so that it sets or gets the value
at the path specified. The first argument should be the root
object that the path belongs to. The 2nd argument is the path
itself and the 3rd optional argument is the value to set at the
path.

If a value is provided then the path will be set to that value.
Any objects not present within the path will be created
automatically in order for the path to be successfully set.

let stuff = {}
namespace(stuff, 'moreStuff.name', 'the stuff')
// results in {moreStuff: {name: 'the stuff'}}

If no value is provided the the function will return the value
at the path given. If the path is not valid/present then
undefined will be returned.

namespace(stuff, 'moreStuff.name') // returns 'the stuff'
namesace(stuff, 'otherStuff.id') // returns undefined

Parameters:
  an obj
  a str
  an optional value of any type?
Returns:
  if 2 args passed
    returns value found at end of path
  if 3 args passed
    no return, only sets value in obj?
Examples:
  let stuff = {}
  namespace(stuff, 'moreStuff.name', 'the stuff')
    // results in {moreStuff: {name: 'the stuff'}}

  namespace(stuff, 'moreStuff.name')
    // returns 'the stuff'
  namesace(stuff, 'otherStuff.id')
    // returns undefined
Pseudocode:
  initialize current as root
  if value is undefined
  convert path into an array of strs, split on '.'s
    if at last el
      if value is defined
        set path in current to value
      otherwise
        return value found at current path
    otherwise
      if prop does not exist in current
        set el as prop in current with value of obj
      reassign current to equal obj in current at el prop
*/

// broken problem, does not require any explicit returns
// passes tests just when establishing pathway in obj

function namespace(root, path, value) {
  path.split('.').reduce((r, p, i, a) => i < a.length - 1 ? r[p] || (r[p] = {}) : value ? r[p] = value : r[p], root);
}

function namespace(root, path, value) {
  path.split('.').reduce((r, p, i, a) => i < a.length - 1 ? r = r[p] || (r[p] = {}) : value && (r[p] = value), root);
}

function namespace(root, path, value) {
  path.split('.').reduce((r, p, i, a) => i < a.length - 1 ? r = r[p] || (r[p] = {}) : value ? r[p] = value : r[p], root);
}

function namespace(root, path, value) {
  path.split('.').reduce((r, p, _, a) => p === a.at(-1) ? value && (r[p] = value) : r = r[p] || (r[p] = {}), root);
}

function namespace(root, path, value) {
  path.split('.').reduce((r, p, _, a) => p === a.at(-1) ? value ? r[p] = value : r[p] : r = r[p] || (r[p] = {}), root);
}

function namespace(root, path, value) {
  let current = root, paths = path.split('.');
  for (let i = 0; i < paths.length; i++) {
    i < paths.length - 1 ? current = current[paths[i]] || (current[paths[i]] = {}) : value ? current[paths[i]] = value : current[paths[i]];
  }
}

function namespace(root, path, value) {
  let current = root, paths = path.split('.');
  for (let i = 0; i < paths.length; i++) {
    if (i === paths.length - 1) {
      if (value) current[paths[i]] = value;
      else return current[paths[i]];
    } else current = current[paths[i]] || (current[paths[i]] = {});
  }
}