/*
Magic The Gathering is a collectible card game that features
wizards battling against each other with spells and creature
summons. The game itself can be quite complicated to learn. In
this series of katas, we'll be solving some of the situations
that arise during gameplay. You won't need any prior knowledge
of the game to solve these contrived problems, as I will provide
you with enough information.

In Magic, each spell you cast has a cost associated with it.
Those costs are represented like so:
"B" -> One black mana
"G" -> One green mana
"R" -> One red mana
"U" -> One blue mana
"W" -> One white mana
"1" -> One colorless mana
"2" -> Two colorless mana
"3BBG" -> Three colorless mana, two black mana, one green mana

Your mana pool will be one string that contains all of your
available mana like so:
"10WWWRRRRR" -> Means you have 10 colorless mana, 3 white mana
and 5 red mana to work with.
The caveat is, any left over colored mana, can be used as
colorless mana. So if you have a spell that costs "1B" and your
mana pool has "UB" you can cast that spell, since the "U" can be
used as a colorless mana.

With this knowlege, write a function canCast() that takes in a
string for your mana pool and then any number of spells' casting
costs. Return true if you have enough mana to cast the spell,
false otherwise.

Parameters:
  a str, collection of mana
  str(s), mana cost of spell(s)
Returns: a boolean
  whether player can cast all spells
Examples:
  canCast("BBRR","BR"), true
  canCast("BBRR","BR","BR"), true
  canCast("4R","3R"), true
  canCast("2", "R"), false
  canCast("RR", "2"), true
Pseudocode:
  separate the num from pool
  initialize a var to keep track of colorless cost assigned to 0
  initialize a hash to keep track of mana pool (color values only) & count
  iterate over costs strs
    isolate num value from costs & add to colorless cost var
    for each cost char (letter values only)
      if current char in hash is greater than 0
        decrement the value
      if current char in hash is 0
        return false
  if colorless cost is less than or equal to num from pool plus remaining values of hash
    return true
  otherwise
    return false
*/

function canCast(pool, ...costs) {
  let colorlessCost = 0;
  const colorlessPool = parseInt(pool) || 0,
        hash = [...pool].reduce((o, k) => (isNaN(k) && (o[k] = ++o[k] || 1), o), {});
  for (const cost of costs) {
    if (n = parseInt(cost)) colorlessCost += n;
    for (const char of n ? cost.slice(`${n}`.length) : cost) {
      if (hash[char]) hash[char]--;
      else return false;
    }
  }
  return colorlessCost <= colorlessPool + Object.values(hash).reduce((s, n) => s + n, 0);
}