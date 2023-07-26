/*
If you like Taco Bell, you will be familiar with their signature
doritos locos taco. They're very good.

Why can't everything be a taco? We're going to attempt that here,
turning every word we find into the taco bell recipe with each
ingredient.

We want to input a word as a string, and return a list
representing that word as a taco.

Key

all vowels (except 'y') = beef

t = tomato

l = lettuce

c = cheese

g = guacamole

s = salsa

NOTE
We do not care about case here. 'S' is therefore equivalent to
's' in our taco.

Ignore all other letters; we don't want our taco uneccesarily
clustered or else it will be too difficult to eat.

Note that no matter what ingredients are passed, our taco will
always have a shell.

Parameters: a str
Returns: an array of strs
Examples:
  tacofy(""), ['shell', 'shell']
  tacofy("a"), ['shell', 'beef', 'shell']
  tacofy("ggg"), ['shell', 'guacamole', 'guacamole', 'guacamole', 'shell']
  tacofy("ogl"), ['shell', 'beef', 'guacamole', 'lettuce', 'shell']
  tacofy("ydjkpwqrzto"), ['shell', 'tomato', 'beef', 'shell']
Pseudocode:
  initialize taco var assigned to an array containing 'shell'
  iterate over the chars of input str
    if the letter is associated with an ingredient
      push that ingredient to taco
  push 'shell' to taco
  return taco
*/

function tacofy(word) {
  const taco = ['shell'],
        vows = 'aeiou',
        ings = {t:'tomato', l:'lettuce', c:'cheese', g:'guacamole', s:'salsa'};
  [...word.toLowerCase()].forEach(c => ings[c] && taco.push(ings[c]) || vows.includes(c) && taco.push('beef'));
  taco.push('shell');
  return taco;
}