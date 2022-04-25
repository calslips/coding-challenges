/**
 * The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
 */

function generateHashtag (str) {
  let hashtag;
  if (str.replace(/\s/g, '')) hashtag = '#' + str.split(' ').reduce((s, w) => w ? s + w[0].toUpperCase() + w.slice(1) : s, '');
  return !!hashtag && hashtag.length < 141 && hashtag;
}