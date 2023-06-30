/*
Halloween is coming, and many children are in front of your house.
They are shouting: "trick or treat!" So you need to give them some
candy, let them leave.

Arguments:
children: numbers of children, more than or equals to 2
candies: packets of items, like this:
  [["candy","apple","candy"],["candy","candy"],["candy","candy"]]

Results:
If the children get what they want, return "Thank you, strange uncle!"
If not, return "Trick or treat!"

How to let the children satisfied?
1 - Each child has at least two candies;
2 - Each child gets the same amount of candy.
3 - No children get the "bomb" ;-)
4 - Packets cannot be divided, each child gets a full packet

Some Examples
trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy"]])
should return: "Thank you, strange uncle!"(Don't mind apple)

trickOrTreat(3,[["candy","apple"],["apple","candy"],["candy","apple"]])
should return: "Trick or treat!"(Each child has only got 1 candy)

trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy","candy"]])
should return: "Trick or treat!"(The amount of candy are diffrent)

trickOrTreat(3,[["candy","apple","candy"],["candy","candy"]])
should return: "Trick or treat!"(One child has no candy)

trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","bomb","candy"]])
should return: "Trick or treat!"(Some child got a bomb)

You can assume that the arguments are valid arrays
(like the examples above, no empty array).

Parameters:
  a num
  a 2d array
    nested arrays contain strs
Returns: a str
Examples:
  trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy"]]),
    "Thank you, strange uncle!"
  trickOrTreat(3,[["candy","apple"],["apple","candy"],["candy","apple"]]),
    "Trick or treat!"
  trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy","candy"]]),
    "Trick or treat!"
  trickOrTreat(3,[["candy","apple","candy"],["candy","candy"]]),
    "Trick or treat!"
  trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","bomb","candy"]]),
    "Trick or treat!"
Pseudocode:
  if children count is greater than candies length
    return 'Trick or treat!'
  initialize a response var with the value of 'Thank you, strange uncle!'
  initialize candy count to the count of candies within 1st nested array
  iterate over the input array
    if current batch does NOT have more than 1 candy
    OR does NOT have the same amount of candy as candy count
    OR contains 'bomb'
      reassign response to 'Trick or treat!'
      break out of loop
    otherwise
      continue
  return response
*/

function trickOrTreat(children, candies) {
  if (children > candies.length) return 'Trick or treat!';
  for (let i = 0, c = candies[0].filter(e => e === 'candy').length; i < candies.length; i++) {
    if (c < 2 || c !== candies[i].filter(e => e === 'candy').length || candies[i].includes('bomb')) {
      return 'Trick or treat!';
    }
  }
  return 'Thank you, strange uncle!';
}

function trickOrTreat(children, candies) {
  if (children > candies.length) return 'Trick or treat!';
  let c = candies[0].filter(e => e === 'candy').length;
  for (const packet of candies) {
    let candyCount = 0;
    for (const item of packet) {
      if (item === 'bomb') return 'Trick or treat!'
      if (item === 'candy') candyCount++;
    }
    if (candyCount < 2 || candyCount !== c) return 'Trick or treat!';
  }
  return 'Thank you, strange uncle!';
}