/**
 *Remove all exclamation marks from the end of words.
 Words are separated by a single space.
 There are no exclamation marks within a word.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"
 */

function remove (string) {
  return string.split(' ').map(w => {
    while (w.endsWith('!')) w = w.slice(0, -1);
    return w;
  }).join(' ');
}