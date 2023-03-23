/*
You're a programmer in a SEO company. The SEO specialist of
your company gets the list of all project keywords everyday,
then he looks for the longest keys to analyze them.
You will get the list with keywords and must write a simple
function that returns the biggest search keywords and sorts
them in lexicographical order.

For instance you might get:

  'key1', 'key2', 'key3', 'key n', 'bigkey2', 'bigkey1'

And your function should return:

  "'bigkey1', 'bigkey2'"

Parameters: multiple strs
Returns: a str
  a concatenation of the longest str args
  comma & space separated & sorted
Examples:
  theBiggestSearchKeys("key1", "key22", "key333"), "'key333'"
  theBiggestSearchKeys("coding", "sorting", "tryruby"), "'sorting', 'tryruby'"
  theBiggestSearchKeys("small keyword", "how to coding?", "very nice kata", "a lot of keys", "I like Ruby!!!"), "'I like Ruby!!!', 'how to coding?', 'very nice kata'"
  theBiggestSearchKeys("pippi"), "'pippi'"
  theBiggestSearchKeys(), "''"
Pseudocode:
  collect all args into an array of keys
  if args length is less than 2
    return arg wrapped in a second layer of quotes
  find the max length of the input strs
  collect only the strs from args that match max length
  map over longest args
    wrap each arg in a second layer of quotes
  sort the collection of longest args lexicographically
  return sorted collection of longest args, joined on comma & space
*/

function theBiggestSearchKeys(...keys) {
  if (keys.length < 2) return `'${keys}'`;
  const max = keys.reduce((m, k) => m < k.length ? k.length : m, 0);
  return keys.filter(k => k.length === max).map(k => `'${k}'`).sort().join(', ');
}