/*
Ever since you started work at the grocer, you have been
faithfully logging down each item and its category that passes
through. One day, your boss walks in and asks, "Why are we just
randomly placing the items everywhere? It's too difficult to
find anything in this place!" Now's your chance to improve the
system, impress your boss, and get that raise!

The input is a comma-separated list with category as the prefix
in the form "fruit_banana". Your task is to group each item into
the 4 categories Fruit, Meat, Other, Vegetable and output a
string with a category on each line followed by a sorted
comma-separated list of items.

For example, given:
"fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange"

output:
"fruit:apple,banana,orange\nmeat:\nother:juice,sardines\nvegetable:carrot"

Assume that:
Only strings of the format category_item will be passed in
Strings will always be in lower case
Input will not be empty
Category and/or item will not be empty
There will be no duplicate items
All categories may not have items

Parameters: a str
  comma separated list of grocery items
  formatted 'category_item'
Returns: a str
  items condensed in the same category, new line separated
  formatted 'category1:item1,...itemN\ncategory2:item1,...itemN'
Examples:
  solution("fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange"),
    "fruit:apple,banana,orange\nmeat:\nother:juice,sardines\nvegetable:carrot"
Pseudocode:
  initialize a result var assigned to an array
  initialize an obj containing the categories of
    fruit, meat, other, and vegetable, all with the value of an empty arr
  split input str into an array, separated on commas
  iterate over the array of input strs
    split current str on '_' to separate category from item
    find the category in obj and push item to its value arr
    if category is not explicitly listed in obj
      push item to other
  iterate over the keys of the obj
    if obj at key has a length
      push str in format of 'key:items' to result arr
      (with items sorted alphabetically)
    otherwise
      push str in format of 'key:' to result arr
  return result array joined on new line char
*/

function solution(input) {
  const result = [], obj = {fruit: [], meat: [], other: [], vegetable: []};
  input.split(',').forEach(e => {[c, i] = e.split('_'), obj[c] ? obj[c].push(i) : obj.other.push(i)});
  Object.keys(obj).forEach(k => result.push(`${k}:${obj[k].sort()}`));
  return result.join('\n');
}