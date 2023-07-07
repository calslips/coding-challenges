/*
Steve and Josh are bored and want to play something. They don't
want to think too much, so they come up with a really simple game.
Write a function called winner and figure out who is going to win.

They are dealt the same number of cards. They both flip the card
on the top of their deck. Whoever has a card with higher value
wins the round and gets one point (if the cards are of the same
  value, neither of them gets a point). After this, the two cards
  are discarded and they flip another card from the top of their
  deck. They do this until they have no cards left.

deckSteve and deckJosh are arrays representing their decks. They
are filled with cards, represented by a single character. The card
rank is as follows (from lowest to highest):

'2','3','4','5','6','7','8','9','T','J','Q','K','A'

Every card may appear in the deck more than once. Figure out who
is going to win and return who wins and with what score:

"Steve wins x to y" if Steve wins;
  where x is Steve's score, y is Josh's score;
"Josh wins x to y" if Josh wins;
  where x is Josh's score, y is Steve's score;
"Tie" if the score is tied at the end of the game.

Example
Steve is dealt: ['A','7','8']
Josh is dealt: ['K','5','9']
In the first round, ace beats king and Steve gets one point.
In the second round, 7 beats 5 and Steve gets his second point.
In the third round, 9 beats 8 and Josh gets one point.
So you should return: "Steve wins 2 to 1"

Parameters: 2 str arrays
Returns: a str
Examples:
  winner(['T', '9'], ['T', '8']), 'Steve wins 1 to 0'
  winner(['2', '3', '4'], ['Q', 'K', 'A']), 'Josh wins 3 to 0'
  winner(['T'], ['T']), 'Tie'
Pseudocode:
  initialize steve and josh vars assigned to 0
  initialize a map containing face keys & associated num values
  iterate over the input arrays
    compare cards at matching index
    if steve's card is greater than josh's
      increment steve
    otherwise if josh's card is greater than steve's
      increment josh
  if steve and josh are even
    return 'Tie'
  otherwise
    return winner and points in str format
*/

function winner(deckSteve, deckJosh) {
  let steve = 0, josh = 0;
  const map = {T:10, J:11, Q:12, K:13, A:14};
  deckSteve.forEach((c, i) => {
    const s = +c || map[c], j = +deckJosh[i] || map[deckJosh[i]];
    s > j && steve++ || s < j && josh++;
  });
  return steve > josh ? `Steve wins ${steve} to ${josh}` : steve < josh ? `Josh wins ${josh} to ${steve}` : 'Tie';
}

function winner(deckSteve, deckJosh) {
  let steve = 0, josh = 0;
  const map = {T:10, J:11, Q:12, K:13, A:14};
  deckSteve.forEach((c, i) => {
    if ((+c || map[c]) > (+deckJosh[i] || map[deckJosh[i]])) steve++;
    else if ((+c || map[c]) < (+deckJosh[i] || map[deckJosh[i]])) josh++;
  });
  return steve > josh ? `Steve wins ${steve} to ${josh}` : steve < josh ? `Josh wins ${josh} to ${steve}` : 'Tie';
}