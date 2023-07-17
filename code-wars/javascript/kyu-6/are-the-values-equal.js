/*
Create the areEqual function that will return true if the two
supplied arguments hold exactly the same values and the same
number of values (not necessarily in the same order) and false
if they do not.

The supplied arguments will be objects, arrays and strings.

Examples:

{laura:4, adam:3} & {laura:4, adam:3} => true
{adam:3, laura:4, maisie:2} & {laura:4, adam:3} => false
[{a:4},{b:3}] & [{b:3},{a:4}]) => true
{a:['5','6','7'], b:['4','5','6']} & {a:[5,6,7], b:[4,5,6]} => false
'Hello' & 'Hello' => true

Parameters: 2 objs, arrays, or strs
Returns: a boolean
Examples:
  areEqual([{a:3},{b:4}], [{a:'3'},{b:'4'}]), false
  areEqual({a:[2,3],b:[4]}, {b:[4],a:[2,3]}), true
  areEqual({adam:3, laura:4}, {laura:4, adam:3}), true
  areEqual({adam:3, laura:4, maisie:2}, {adam:3, laura:4}), false
  areEqual({a:3}, {b:4}, {b:3}, {a:4}), false
Pseudocode:
  if inputs are strings
    return the result of comparing them
  convert inputs to array of keys
  if the lengths of keys are NOT equal
    return false
  iterate over the keys of 1st arg
    if val of current key for both args are objects
      return recursive call to fn with vals passed in
    otherwise if vals for both args are NOT equal
      return false
  return true
*/

function areEqual(value1, value2) {
  if (typeof value1 === 'string') return value1 === value2;
  const [keys1, keys2] = [value1, value2].map(o => Object.keys(o));
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    if (typeof value1[key] === 'object') return areEqual(value1[key], value2[key]);
    if (value1[key] !== value2[key]) return false;
  }
  return true;
}