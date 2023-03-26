/*
Implement the method find which takes in an two parameters
object and path. The path will be a period-delimited string of
properties that we will use to traverse through our object to
find our target value.

Edge Cases And Further Consideration
Be sure to handle passing array indices. For example, if we have
an object: { people: ['John', 'Dave', 'Lisa'] } and the path is
'people.1', the target value is 'Dave' which is the string at
position 1 inside of the people array.

Also this method should handle invalid paths. If we have an
object { user: { name: 'Dan' } } and the path is
'user.wallet.money', we should return undefined. Valid paths are
exclusive to properties on the object which are not inherited,
in other words it is specific to this object and does not need
to look up the prototype chain.

Parameters:
  an object
  a period delimited str
    (represents obj path)
Returns: value found in obj at end of path
  OR undefined if invalid path
Examples:
  find({ user: { name: { first: 'John', last: 'Snow' } } }, 'user.name.first'), 'John'
  find({ user: { name: { first: 'John', last: 'Snow' } } }, 'user.parents.father'), undefined
Pseudocode:
  convert path to an array of words (split on '.' delimiter)
  iterate over the path
    run as long as counter does not exceed path length AND
    obj exists
    reassign obj to equal value of obj at current path
    (only if prop exists on obj itself, otherwise undefined)
    increment counter by 1 each iteration
  return obj
*/

function find(object, path) {
  return path.split('.').reduce((o, p) => o?.hasOwnProperty(p) ? o[p] : undefined, object);
}

function find(obj, path) {
  for (let i = 0, p = path.split('.'); i < p.length && obj; obj = obj.hasOwnProperty(p[i]) ? obj[p[i]] : undefined, i++);
  return obj;
}