/*
You've been given the task of retrieving the top N high scores
from players of a video game.

You need to write the function top_scores(records, n_top)

where records is a list of lists in the form of

records = [
  ["Bob", 100],
  ["Jane", 120],
  ["Alice", 10],
  ["Bob", 110],
  ["Bob", 10]
]
and n_top is an integer.

The function should return the top n records, where each user
name can appear at most a single time. Records should be in
from highest to lowest. Users with the same score should be in
alphabetical order.

>>> top_scores(records, 3)
[["Jane", 120],["Bob", 110],["Alice", 10]]
if n_top is negative or 0, the returned value should be an
empty list.

if n_top is greater than the total number of records,
you should include as many valid records as possible.

Parameters:
  an array of arrays
    tuples with a str, name
    and a num, score
  a num
Returns: an array of arrays
  the top n (num input) scores
  from highest to lowest,
  same scores sorted alphabetically,
  unique names only
  when n is 0 or neg, returns an empty array
Examples:
  topScores([["John", 100], ["John", 120], ["John", 300]], 2), [["John", 300]]
  topScores([["Peter", 100], ["Parker", 120], ["Mary", 50], ["Jane", 600]], 3), [["Jane", 600], ["Parker", 120], ["Peter", 100]]
  topScores([["Sauron", 1000], ["Frodo", 500], ["Frank", 500], ["Bilbo", 100]], 3), [["Sauron", 1000], ["Frank", 500], ["Frodo", 500]]
  topScores([["No", 100], ["Results", 250], ["From", 600], ["Negative", 100], ["Numbers", 10]], -1), []
Pseudocode:
  if input num is 0 or less
    return empty array
  sort the records
    by score, descending
    (if scores are equal, sort by name alphabetically)
  convert records to an object (removing duplicate entries)
  convert back to an array of entries
  return a slice of new entries from 0 to n
*/

function topScores(records, nTop) {
  if (nTop < 1) return [];
  const copy = records.slice(), map = new Map();
  copy.sort(([aName, aScore], [bName, bScore]) => bScore - aScore || aName.localeCompare(bName));
  for (const [name, score] of copy) {
    if (!map.has(name)) map.set(name, score);
    if (map.size === nTop) break;
  }
  return [...map];
}

function topScores(records, nTop) {
  if (nTop < 1) return [];
  const copy = records.slice(), unique = {};
  copy.sort(([aName, aScore], [bName, bScore]) => bScore - aScore || aName.localeCompare(bName));
  for (const [name, score] of copy) if (!(name in unique)) unique[name] = score;
  return Object.entries(unique).slice(0, nTop);
}