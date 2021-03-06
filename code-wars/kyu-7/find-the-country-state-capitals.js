/*
Complete the method that takes a sequence of objects with two keys each:
country or state, and capital. Keys may be symbols or strings.

The method should return an array of sentences declaring the state or country and its capital.

Parameters: an array of objects,
  each object has 2 keys country/state and capital
  keys can be strings or symbols
Returns: an array of sentences,
  each stating the country/state and its capital
Examples:
  state_capitals = [{state: 'Maine', capital: 'Augusta'}]
  capital(state_capitals)[0] // "The capital of Maine is Augusta"

  country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
  capital(country_capitals)[0] // "The capital of Spain is Madrid"

  mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
  capital(mixed_capitals)[1] // "The capital of Spain is Madrid"
Pseudocode:
  iterate over the input array
  replace each object with a string stating the country/state and its capital
  return new array of strings
*/

function capital(capitals) {
  return capitals.map(c => `The capital of ${c.country || c.state} is ${c.capital}`);
}