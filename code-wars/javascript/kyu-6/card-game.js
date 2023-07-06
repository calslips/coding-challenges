/*
Lеt's create function to play cards. You receive 3 arguments:
card1 and card2 are cards from a single deck; trump is the main
suit, which beats all others.

You have a preloaded deck (in case you need it):

deck = ["joker","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣","A♣",
                "2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦","A♦",
                "2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥","A♥",
                "2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠","A♠"]
Game rules
If both cards have the same suit, the higher one wins
If both cards have trump, the higher one wins
If the cards have different suits and no one has trump, return "Let us play again."
If one card has trump, but not the other, the one with the trump wins
If there is a winner, return "The first/second card won."
If the two cards are the same, return "Someone cheats."
The joker always wins

Examples
"3♣", "Q♣", "♦"  -->  "The second card won."
"5♥", "A♣", "♦"  -->  "Let us play again."
"8♠", "8♠", "♣"  -->  "Someone cheats."
"2♦", "A♠", "♦"  -->  "The first card won."
"joker", "joker", "♦"  -->  "Someone cheats."

Parameters: 3 strs
Returns: a str
Examples:
  cardGame('3♣', 'Q♣', '♦'), 'The second card won.'
  cardGame('5♥', 'A♣', '♦'), 'Let us play again.'
  cardGame('8♠', '8♠', '♣'), 'Someone cheats.'
  cardGame('2♦', 'A♠', '♦'), 'The first card won.'
  cardGame('joker', 'joker', '♦'), 'Someone cheats.'
  cardGame('10♣', 'joker', '♠'), 'The second card won.'
Pseudocode:
  if both cards are equal
    return 'Someone cheats.'
  if one of the cards is a joker
    that card wins
  separate card value from suit
  if suits are the same
    higher card wins
  if only one card has trump suit
    that card wins
  otherwise
    return 'Let us play again.'
*/

function cardGame(card1, card2, trump) {
  const res = ['Someone cheats.', 'The first card won.', 'The second card won.', 'Let us play again.'];
  if (card1 === card2) return res[0];
  if (card1 === 'joker') return res[1];
  if (card2 === 'joker') return res[2];
  const map = {J:11, Q:12, K:13, A:14},
        [val1, suit1] = [card1.slice(0, -1), card1.slice(-1)],
        [val2, suit2] = [card2.slice(0, -1), card2.slice(-1)];
  if (suit1 === suit2) return (+val1 || map[val1]) > (+val2 || map[val2]) ? res[1] : res[2];
  if (suit1 === trump) return res[1];
  if (suit2 === trump) return res[2];
  return res[3];
}