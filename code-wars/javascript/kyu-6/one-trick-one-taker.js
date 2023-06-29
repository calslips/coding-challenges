/*
YaCg is a trick-taking game ie a game in which series of rounds,
called "tricks", are played. At the end of a "trick" the winner
of the trick "takes" it (and becomes the "trick-taker").

A standard 52-card pack is used. The cards in each suit rank
from highest to lowest: A K Q J 10 9 8 7 6 5 4 3 2.

(new) rule
The leader (==1st player) leads to the first trick. He may lead
any card in his hand. Each other players must FOLLOW suit by
playing a card of the suit led if he has one. A player with no
card of the suit led may "discard" any card.

The trick is won by the highest card of the suit led.

Examples
["2H","8H","KD","KH"] // --> "KH" wins 'cause "H" is the suit led
                              and "KH" is the highest of "H"
["2H","8C","JD","KS"] // --> "2H" wins 'cause "H" is the suit led
                              and "2H" is the only "H"
Task
Code a function winnerOfTrick( cards, players ) which return the
name of the "trick-taker" ie the one who wins the trick.

Input
cards is an array of card-codes of the form "RS" where :

"R" is the rank of the card
  (one of A, K, Q, J, T (for 10), 9, 8, 7, 6, 5, 4, 3 or 2)
"S" is the *suit * of the card
  (one of "H" (Hearts), "C" (Clubs), "D" (Diamonds) and "S" (Spades))
eg : [ "2H", "3H", "4C", "KD", "AS" ]

players is an array of yagc-fanatic yak-boys/girls.

eg : [ "ALgichh", "Bdobd", "Charmolg", "Dbrang", "Erming" ]

Output
a string of the form "Bdobd wins".

Parameters:
  cards, an array of strs
  players, an array of strs
Returns: a str
Exmples:
  winnerOfTrick(["2D", "3D", "4S"], ["GgbA", "mZoIs", "S'Lg"]), "mZoIs wins"
  winnerOfTrick(["2D", "3H", "4S"], ["GgbA", "mZoIs", "S'Lg"]), "GgbA wins"
Pseudocode:
  initialize a taker var assigned to index of 1st player (0)
  initialize a rank var to be a map containing the letter rankings as keys
    & their associated points as values
  iterate over the cards array, starting at 1
    if current card has a suit that matches taker suit AND
    if rank is greater than taker rank
      reassign taker to equal current index
  return player at taker index concatted with " wins"
*/

function winnerOfTrick(cards, players) {
  let t = 0;
  for (let i = 1, r = {A:14, K:13, Q:12, J:11, T:10}; i < cards.length; i++) {
    cards[i][1] === cards[t][1] && (parseInt(cards[i]) || r[cards[i][0]]) > (parseInt(cards[t]) || r[cards[t][0]]) && (t = i);
  }
  return `${players[t]} wins`;
}