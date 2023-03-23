/**
 *You are having a BBQ, after the BBQ you are left with the rubbish.
 You have 3 recycling boxes:

Red: Plastics, Green: Glass, Blue: Card.

You will need to sort the rubbish according to the material and return
the number of items in each box in the form of an array i.e [2,3,4] where
2 is the number of plastic items,
3 is the number of glass items and
4 is the number of card items. assume:

Plastics > 0, Glass < 0, Card = 0
 */

function recycleMe(recycle) {
  return recycle.reduce((s, c) => c > 0 ? (++s[0], s) : c < 0 ? (++s[1], s) : (++s[2], s), Array(3).fill(0));
}