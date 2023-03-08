/*
Write a method that takes a nested hash (object in javascript)
as input and returns that hash with added "depth" keys.

So, for example, the following input:
{ a: 1, b: 2, c: { d: { e: 3 } } }

would yield the following return value:
{ a: 1, b: 2, c: { d: { e: 3, depth: 2 }, depth: 1 }, depth: 0 }

For Ruby, if the input is not a hash, then the function should
return nil. For JavaScript, if the input is not an object
(including an array), the function should return null.

Parameters: a tree
Returns: modified tree
  depth prop added to each level of the tree (0 top to nth bottom)
Examples:
  recordDepth({ a: 1, b: 2, c: { d: 3 }}), { a: 1, b: 2, c: { d: 3, depth: 1}, depth: 0 }
Pseudocode:
  add depth param to fn, default to 0
  if tree is not an object or is null or is an array
    return null
  iterate over the nodes of the input tree
    if current node contains an obj value
      recursively call fn with 1st arg being current node 2nd arg being depth + 1
  add current depth prop/value to current tree
  return tree
*/

function recordDepth(tree, depth = 0) {
  if (typeof tree !== 'object' || tree === null || Array.isArray(tree)) return null;
  for (const node in tree) if (typeof tree[node] === 'object') recordDepth(tree[node], depth + 1);
  return tree.depth = depth, tree;
}