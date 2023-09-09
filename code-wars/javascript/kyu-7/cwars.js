/*
A person's full name is usually composed of a first name, middle
name and last name; however in some cultures
(for example in South India) there may be more than one middle name.

Write a function that takes the full name of a person, and returns
the initials, separated by dots ('.'). The initials must be
uppercase. The last name of the person must appear in full, with its
first letter in uppercase as well.

See the pattern below:

"code wars"            ---> "C.Wars"
"Barack hussein obama" ---> "B.H.Obama"

Names in the full name are separated by exactly one space (' ') ;
without leading or trailing spaces. Names will always be lowercase,
except optionally their first letter.

Parameters: a str
Returns: a str
Examples:
  initials('code wars'), 'C.Wars'
  initials('Barack hussain obama'), 'B.H.Obama'
  initials('barack hussain Obama'), 'B.H.Obama'
Pseudocode:
  convert input str into an array of words
    (split on spaces)
  map over the words array
    if current word is the last word
      capitalize it
    otherwise
      isolate the 1st letter and capitalize it
  join mapped words array on '.'
  return joined str
*/

function initials(n) {
  return `${n}`.split(' ').map((w, i, a) => w[0].toUpperCase() + (i < a.length - 1 ? '' : w.slice(1))).join('.');
}