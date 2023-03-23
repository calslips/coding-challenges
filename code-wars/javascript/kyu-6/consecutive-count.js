/*
I want to know the size of the longest consecutive elements of
X in Y. You will receive two arguments: items and key. Return
the length of the longest segment of consecutive keys in the
given items.

Notes:
The items and the key will be either an integer or a string
(consisting of letters only)
If the key does not appear in the items, return 0

Examples
90000, 0           -->  4
"abcdaaadse", "a"  -->  3
"abcdaaadse", "z"  -->  0

Parameters: 2 strings OR 2 numbers
Returns: a number
  the size of the longest consecutive occurrences of key in item
Examples:
  getConsectiveItems(90000, 0), 4
  getConsectiveItems('ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii', 'i'), 11
Pseudocode:
  convert inputs into string
  if item does NOT include key
    return 0
  initialize a highest var assigned to 1
  initialize a count var assigned to 1
  iterate over the input item from index 1 to end
    if current AND last equal key
      increment count
      if current is the final element AND count is greater than highest
        replace highest with current
    else
      if count is greater than highest
        replace highest with current
      reassign current to be 1
  return highest
*/

function getConsectiveItems(items, key) {
  items = items.toString(), key = key.toString();
  if (!items.includes(key)) return 0;
  let highest = 1, count = 1;
  for (let i = 1; i < items.length; i++) {
    if (items[i] === key && items[i - 1] === key) {
      count++;
      if (i === items.length - 1 && count > highest) highest = count;
    } else {
      if (count > highest) highest = count;
      count = 1;
    }
  }
  return highest;
}