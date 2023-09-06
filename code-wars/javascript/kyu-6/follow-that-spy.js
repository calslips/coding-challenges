/*
We are diligently pursuing our elusive operative, Matthew Knight,
who also goes by the alias Roy Miller. He employs a nomadic
lifestyle to evade detection, constantly moving from one location
to another, with each of his journeys following a perplexing and
non-standard sequence of itineraries. Our mission is to decipher
the routes he will undertake during each of his voyages.

Task
You've been provided with an array of itinerary routes, decipher
the precise destinations he will visit in the correct sequence
according to his meticulously planned itineraries.

Example
Based on the provided routes:
[ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]

The correct sequence of destinations is:
"USA, BRA, UAE, JPN, PHL"

Note:

You can safely assume that there will be no duplicate locations
with distinct routes.
All routes provided will have non-empty itineraries.
There will always be at least one (1) route connecting one
waypoint to another.

Parameters: a 2d array
  inner array containing 2 strs
Returns: a str
Examples:
  findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]),
    "MNL, TAG, CEB, TAC, BOR"
  findRoutes([["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]]),
    "UK, GER, BEL, CAN"
  findRoutes([["BRA", "KSA"], ["USA", "BRA"], ["JPN", "PHL"], ["KSA", "UAE"], ["UAE", "JPN"]]),
    "USA, BRA, KSA, UAE, JPN, PHL"
  findRoutes([["HQ", "SH"]]),
    "HQ, SH"
Pseudocode:
  initialize result var assigned to an empty arr
  convert 2d array into entries within an obj
  convert obj to array of values
  initialize first var assigned to the key in obj that is not contained as a value
  push first and its associated value in obj to result array
  iterate over the length of input array
      use the last el from result array as key for obj
      and push its value to result array
  return result joined on a comma and a space
*/

function findRoutes(routes) {
  const map = routes.reduce((o, [k, v]) => (o[k] = v, o), {}),
        values = Object.values(map),
        first = Object.keys(map).find(k => !values.includes(k));
  return routes.reduce((a, c, i) => a.concat(map[a[++i]] || []), [first, map[first]]).join(', ');
}