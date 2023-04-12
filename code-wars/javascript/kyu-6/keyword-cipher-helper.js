/*
A keyword cipher is a monoalphabetic cipher which uses a "keyword"
to provide encryption. It is somewhat similar to a Caesar cipher.

In a keyword cipher, repeats of letters in the keyword are removed
and the alphabet is reordered such that the letters in the keyword
appear first, followed by the rest of the letters in the alphabet
in their otherwise usual order.

E.g. for an uppercase latin alphabet with keyword of "KEYWORD":
A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z

becomes:
K|E|Y|W|O|R|D|A|B|C|F|G|H|I|J|L|M|N|P|Q|S|T|U|V|X|Z

such that:
cipher.encode('ABCHIJ') == 'KEYABC'
cipher.decode('KEYABC') == 'ABCHIJ'

All letters in the keyword will also be in the alphabet. For the
purpose of this kata, only the first occurence of a letter in a
keyword should be used. Any characters not provided in the alphabet
should be left in situ when encoding or decoding.

Parameters:
  class takes in 2 strs
  encode method takes in 1 str
  decode method takes in 1 str
Returns:
  a str
Examples:
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const key = "keyword";
  const cipher = new KeywordCipher(abc, key);

  cipher.encode("abc"), "key"
  cipher.encode("xyz"), "vxz"
  cipher.decode("key"), "abc"
  cipher.decode("vxz"), "xyz"
Pseudocode:
  declare class
    define constructor, takes in 2 strs
      define private encode hash prop as empty obj
      define private decode hash prop as empty obj
      concat key with abc convert to set (to remove dupes) to array
        iterate over above array
          set encode at respective index char of abc to current char
          set decode at current char to respective index char of abc
    define encode method, takes in 1 str
      initialize result var assigned to empty str
      iterate over input
        use encode hash to convert char
        concat converted char with result
      return result
    define decode method, takes in 1 str
      initialize result var assigned to empty str
      iterate over input
        use decode hash to convert char
        concat converted char with result
      return result
*/

class KeywordCipher {
  constructor(abc, key) {
    this._encodeMap = {};
    this._decodeMap = {};
    [...new Set(key + abc)].forEach((c, i) => {this._encodeMap[abc[i]] = c, this._decodeMap[c] = abc[i]});
  }
  encode(str) {
    return [...str].map(c => this._encodeMap[c] || c).join('');
  }
  decode(str) {
    return [...str].map(c => this._decodeMap[c] || c).join('');
  }
}