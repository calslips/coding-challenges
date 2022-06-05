/*
It's almost Christmas! That means Santa's making his list, and checking it
twice. Unfortunately, elves accidentally mixed the Naughty and Nice list
together! Santa needs your help to save Christmas!

Santa needs you to write two functions. Both of the functions accept a sequence
of objects. The first one returns a sequence containing only the names of the
nice people, and the other returns a sequence containing only the names of the
naughty people. Return an empty sequence [] if the result from either of the
functions contains no names.

The objects in the passed will represent people.
Each object contains two properties: name and wasNice.
name - The name of the person
wasNice - True if the person was nice this year, false if they were naughty


Parameters: arrays of objects,
  each object contains a name key, of value string
  and a wasNice key, of value boolean
Returns:
  getNiceNames returns an array of names (strings) of those who were nice
  getNaughtyNames returns an array of names (strings) of those who were naughty
Examples:
  getNiceNames( [
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true }
  ] )
  // => returns [ 'Warrior reading this kata', 'Santa' ]

  getNaughtyNames( [
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true }
  ] )
  // => returns [ 'xDranik' ]

Pseudocode:
  filter the given array to contain only nice/naughty people
  map over the filtered array to only contain the peoples names
  return mapped array
*/

function getNiceNames(people){
  return people.filter(p => p.wasNice).map(p => p.name);
}

function getNaughtyNames(people){
  return people.filter(p => !p.wasNice).map(p => p.name);
}