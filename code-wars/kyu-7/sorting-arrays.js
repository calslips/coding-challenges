/*
Given two arrays, a1 and a2, sort the elements of a2 based on
the index of the word in a1 that begins with the same letter.

Each element in the arrays will start with a unique letter so
there will only be a single match for each element.

Parameters: 2 arrays containing strs
Returns: an array of strs
  2nd array sorted based on index of str from
  1st array that starts with the same letter
Examples:
  let a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
  let a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
  sortArray(a1, a2), ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

  a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
  a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
  sortArray(a1, a2), ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

  a1 = ['newt', 'lizard', 'snail', 'tapir', 'rabbit'];
  a2 = ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'];
  sortArray(a1, a2), ['narwhal', 'llama', 'sloth', 'tortoise', 'raven']
Pseudocode:
  sort a2
    index of str from a1 that starts with a's first char compared to
    index of str from a1 that starts with b's first char
*/

function sortArray(a1, a2) {
  return [...a2].sort((a, b) => a1.findIndex(s => s.startsWith(a[0])) - a1.findIndex(s => s.startsWith(b[0])));
}

function sortArray(a, b) {
  return a.map(as => b.find(bs => as[0] === bs[0]));
}