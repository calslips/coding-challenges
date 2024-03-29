/*
A bookseller has lots of books classified in 26 categories
labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more
characters. The 1st character of a code is a capital letter
which defines the book category.

In the bookseller's stocklist each code c is followed by a space
and by a positive integer n (int n >= 0) which indicates the
quantity of books of this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
or ....

You will be given a stocklist (e.g. : L) and a list of categories
in capital letters e.g :

M = {"A", "B", "C", "W"}
or
M = ["A", "B", "C", "W"]
or ...

and your task is to find all the books of L with codes belonging
to each category of M and to sum their quantity according to each
category.

For the lists L and M of example you have to return the string
(in Haskell/Clojure/Racket/Prolog a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)

where A, B, C, W are the categories,
20 is the sum of the unique book of category A,
114 the sum corresponding to "BKWRK" and "BTSQZ",
50 corresponding to "CDXEF" and
0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is ""
(Clojure/Racket/Prolog should return an empty array/list instead).

Notes:
In the result codes and their values are in the same order as in M.

Parameters: 2 arrays of strs
Returns: a str
Examples:
  let books = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
  let cats = ["A", "B", "C", "D"];
  stockList(books, cats), "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"

  books = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
  cats = ["A", "B"];
  stockList(books, cats), "(A : 200) - (B : 1140)"
Pseudocode:
  if either arg is empty
    return empty str
  initialize a map of categories using 2nd arg
    each cat to be a key with a value of 0
  iterate over the books array
    if the current book's 1st char is a key in cat map
      increment its value in cat map by the current book's quantity
  map over the keys of cat map
    convert each key to str in format of '(key : value)'
  join mapped keys on hyphens, ' - '
  return joined str
*/

function stockList(listOfArt, listOfCat) {
  if (!(listOfArt.length && listOfCat.length)) return '';
  const catMap = listOfCat.reduce((o, k) => (o[k] = 0, o), {});
  listOfArt.forEach(b => b[0] in catMap && (catMap[b[0]] += +b.split(' ')[1]));
  return listOfCat.map(cat => `(${cat} : ${catMap[cat]})`).join(' - ');
}

function stockList(listOfArt, listOfCat) {
  if (!(listOfArt.length && listOfCat.length)) return '';
  const catMap = listOfCat.reduce((o, k) => (o[k] = 0, o), {});
  listOfArt.forEach(b => b[0] in catMap && (catMap[b[0]] += +b.split(' ')[1]));
  return Object.keys(catMap).map(k => `(${k} : ${catMap[k]})`).join(' - ');
}