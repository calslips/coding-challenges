/*
YaCg is a trick-taking game ie a game in which series of rounds,
called "tricks", are played. At the end of a "trick" the winner
of the trick "takes" it (and becomes the "trick-taker").

A standard 52-card pack is used. The cards in each suit rank from
highest to lowest: A K Q J 10 9 8 7 6 5 4 3 2.

The leader (==1st player) leads to the first trick. He may lead
any card in his hand. Each other players must FOLLOW suit by
playing a card of the suit led if he has one.

trump rule
A player with no card of the suit led may "discard" any card OR
play a trump card ie a card of suit defined as trump at start of
the game. If at least one trump card is played the trick is won
by the highest trump card else the highest led suit card.

Examples
["2H","8H","KD","KH"]
  // --> "KD" may win IF trump is "D" else "KH" is the highest of "H"
  (which is led suit)
["2H","8C","JD","2S"]
  // --> "2S" wins IF trump is "S" else "2H" wins

Task
Code a function winnerOfTrick( cards, players, trump ) which
return the name of the "trick-taker" ie the one who wins the trick.

Input
cards is an array of card-codes of the form "RS" where :
"R" is the rank of the card
  (one of A, K, Q, J, T (for 10), 9, 8, 7, 6, 5, 4, 3 or 2)
"S" is the *suit * of the card
  (one of "H" (Hearts), "C" (Clubs), "D" (Diamonds) and "S" (Spades))
eg : [ "2H", "3H", "4C", "KD", "AS" ]

players is an array of yagc-fanatic yak-boys/girls.
eg : [ "ALgichh", "Bdobd", "Charmolg", "Dbrang", "Erming" ]

trump is a string of the form "X" where "X" is the suit defined as trump
  (one of "H" (Hearts), "C" (Clubs), "D" (Diamonds) and "S" (Spades))

Output
a string of the form "Bdobd wins".

Examples:
winnerOfTrick( ["2D", "3D", "4S"],  ["GgbA", "mZoIs", "S'Lg"], "C" )
  // -> "mZoIs wins" ("3D" is the highest "D" and "C" is the trump suit)
winnerOfTrick( ["2D", "2H", "2S"],  ["GgbA", "mZoIs", "S'Lg"], "S" )
  // -> "S'Lg wins" ("2D" is the highest "D" BUT "2S" is a trump)
winnerOfTrick( ["2D", "KH", "QH"],  ["mZoIs", "GgbA", "S'Lg"], "H" )
  // -> "GgbA wins" ("KH" is the highest trump)

Parameters:
  an array of strs
  an array of strs
  a str
Returns: a str
Examples:
  winnerOfTrick(["2D", "3D", "4S"], ["GgbA", "mZoIs", "S'Lg"], "C"),
    "mZoIs wins"
  winnerOfTrick(["2D", "2H", "2S"], ["GgbA", "mZoIs", "S'Lg"], "S"),
    "S'Lg wins"
  winnerOfTrick(["2D", "KH", "QH"], ["mZoIs", "GgbA", "S'Lg"], "H"),
    "GgbA wins"
Pseudocode:
  initialize taker var assigned to 0
  initialize a map for ranking face value cards
  initialize suit var assigned to 1st card's suit
  iterate over the cards
    if card suit matches 1st card suit OR
    if card suit matches trump suit (reassign suit to equal trump)
      if card value is greater than taker's OR
      if suit does not match taker's (trump suit took over)
        reassign taker to current index
  return taker's name concatted with str ' wins'
*/

function winnerOfTrick(cards, players, trump) {
  let t = 0;
  for (let i = 1, r = {A:14, K:13, Q:12, J:11, T:10}, s = cards[0][1]; i < cards.length; i++)
    if (cards[i][1] === s || cards[i][1] === trump && (s = trump))
      if (s !== cards[t][1] || (parseInt(cards[i]) || r[cards[i][0]]) > (parseInt(cards[t]) || r[cards[t][0]]))
        t = i;
  return `${players[t]} wins`;
}

function winnerOfTrick(cards, players, trump) {
  let t = 0;
  for (let i = 1, r = {A:14, K:13, Q:12, J:11, T:10}, s = cards[0][1]; i < cards.length; i++) {
    if (cards[i][1] === s || cards[i][1] === trump && (s = trump)) {
      if (s !== cards[t][1] || (parseInt(cards[i]) || r[cards[i][0]]) > (parseInt(cards[t]) || r[cards[t][0]])) {
        t = i;
      }
    }
  }
  return `${players[t]} wins`;
}

function winnerOfTrick(cards, players, trump) {
  let t = 0;
  for (let i = 1, r = {A:14, K:13, Q:12, J:11, T:10}, s = cards[0][1]; i < cards.length; i++) {
    if (cards[i][1] === s || cards[i][1] === trump && (s = trump)) {
      let currentCard = parseInt(cards[i]) || r[cards[i][0]], takerCard = parseInt(cards[t]) || r[cards[t][0]];
      if (s !== cards[t][1] || currentCard > takerCard) t = i;
    }
  }
  return `${players[t]} wins`;
}