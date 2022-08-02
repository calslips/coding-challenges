/*
The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their
keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The
dictionaries' keys & values will always be strings and will always not be
empty.

Parameters: an array of objects
  (key is a number representing the order of its placement in a string
  value is the word to be placed in a string)
Returns: a string
  the values from the input arrays objects in the appropriate order
Examples:
  sentence([{'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
            {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} ])
    // 'Vatsan took his dog for a spin'
Pseudocode:
  sort the input array based on ascending order of keys
  map the array to be an array of values
  join array of values on a space
  return joined string
*/

function sentence(list) {
  return list.map(o => Object.entries(o)[0]).sort((a, b) => +a[0] - +b[0]).map(e => e[1]).join(' ');
}