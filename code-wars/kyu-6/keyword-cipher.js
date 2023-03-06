/*
Third day at your new cryptoanalyst job and you come across your
toughest assignment yet. Your job is to implement a simple keyword
cipher. A keyword cipher is a type of monoalphabetic substitution
where two parameters are provided as such (string, keyword). The
string is encrypted by taking the keyword, dropping any letters
that appear more than once. The rest of the letters of the alphabet
that aren't used are then appended to the end of the keyword.

For example,
if your string was "hello" and your keyword was "wednesday",
your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.

To encrypt 'hello' you'd substitute as follows,

              abcdefghijklmnopqrstuvwxyz
  hello ==>   |||||||||||||||||||||||||| ==> bshhk
              wednsaybcfghijklmopqrtuvxz

hello encrypts into bshhk with the keyword wednesday.
This cipher also uses lower case letters only.

Parameters: 2 strings
  string to encrypt
  string used as part of enctyption process
Returns: a string (encrypted, case-insensitive)
Examples:
  keywordCipher("Welcome home","secret"), "wticljt dljt"
  keywordCipher("hello","wednesday"), "bshhk"
  keywordCipher("HELLO","wednesday"), "bshhk"
  keywordCipher("HeLlO","wednesday"), "bshhk"
  keywordCipher("WELCOME HOME", "gridlocked"), "wlfimhl kmhl"
  keywordCipher("alpha bravo charlie", "delta"), "djofd eqdvn lfdqjga"
  keywordCipher("Home Base", "seven"), "dlja esqa"
  keywordCipher("basecamp", "covert"), "ocprvcil"
  keywordCipher("one two three", "rails"), "mks twm tdpss"
  keywordCipher("Test", "unbuntu"), "raqr"
Pseudocode:
  initialize alphabet var to be a str of a-z plus space
  initialize encryption var to be a set of keyword + alphabet (remove duplicates)
  initialize a map (to map unencrypted values to encrypted)
  iterate over alphabet
    set alphabet char as key in map with the value as encryption char at the same index
  iterate over the input str
    convert char to its equivalent value in map
  return encrypted str
*/

function keywordCipher(string, keyword) {
  let result = '';
  const map = new Map(),
        alphabet = 'abcdefghijklmnopqrstuvwxyz ',
        encryption = [...new Set(keyword + alphabet)].join('');
  for (let i = 0; i < alphabet.length; i++) map.set(alphabet[i], encryption[i]);
  for (const char of string.toLowerCase()) result += map.get(char);
  return result;
}