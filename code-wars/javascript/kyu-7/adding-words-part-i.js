/*
Add two English words together!
Implement a class Arith
(struct struct Arith{value : &'static str,} in Rust) such that
  //javascript
  var k = new Arith("three");
  k.add("seven"); //this should return "ten"

Input
- Will be between zero and ten and will always be in lower case

Output
- Word representation of the result of the addition.
  Should be in lower case

Parameters: a str
  class takes in a str value to set as
    prop value during instantiation
  method add takes in a str value to
    "add" to prop value
Returns: a str
  result of adding obj prop value str
  with add method arg str
Examples:
  const i = new Arith("three");
  i.add("seven"), "ten"
  i.add("eight"), "eleven"
  i.add("zero"), "three"
Pseudocode:
  initialize private static map
    map words to numerical equivalent 0-20
  set up constructor that takes in a str value
    define this prop, primary word to equal constructor arg
  define add method that takes in a str value
    replace primary word with its mapped numerical value
    and sum it with str arg replaced with mapped numerical value
    return numerical sums mapped str value
*/

class Arith {
  static #map = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
  ];
  constructor(word) {
    this.primary = word;
  }
  add(word) {
    return Arith.#map[Arith.#map.indexOf(this.primary) + Arith.#map.indexOf(word)];
  }
}

class Arith {
  static #map = {
    zero:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9, ten:10, eleven:11, twelve:12,
    thirteen:13, fourteen:14, fifteen:15, sixteen:16, seventeen:17, eighteen:18, nineteen:19, twenty:20
  };
  constructor(word) {
    this.primary = word;
  }
  add(word) {
    return Object.keys(Arith.#map).find(k => Arith.#map[k] === Arith.#map[this.primary] + Arith.#map[word]);
  }
}