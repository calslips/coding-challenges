/*
Substitute two equal letters by the next letter of the alphabet
(two letters convert to one):

"aa" => "b", "bb" => "c", .. "zz" => "a".
The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.

Example:
let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"

Notes
The order of letters in the result is not important.
The letters "zz" transform into "a".
There will only be lowercase letters.

Parameters: a str
Returns: a str
Examples:
  lastSurvivors('abaa'), 'ac'
  lastSurvivors('zzab'), 'c'
  lastSurvivors(''), ''
  lastSurvivors('xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh'),
    'acdeghlmnqrvyz'
Pseudocode:
  initialize a map
    store all letters from input as keys in map
    with the value as the number of their occurrence
  create a loop to run as long as map contains values greater than 1
    take key with value greater than 1 and subtract 2
    obtain letter from keys char code plus 1 (if it is greater than 122, use 97)
    if letter is already a key in map
      increment its value
    otherwise
      set its value to 1
  return keys of map joined into a single str
*/

function lastSurvivors(str) {
  const obj = [...str].reduce((o, k) => (o[k] = ++o[k] || 1, o), {});
  for (let two = Object.keys(obj).find(k => obj[k] > 1); two; two = Object.keys(obj).find(k => obj[k] > 1)) {
    let next = String.fromCharCode(two.charCodeAt() + 1 > 122 ? 97 : two.charCodeAt() + 1);
    !(obj[two] -= 2) && delete obj[two];
    obj[next] = ++obj[next] || 1;
  }
  return Object.keys(obj).join('');
}

function lastSurvivors(str) {
  const hash = [...str].reduce((o, k) => (o[k] = ++o[k] || 1, o), {});
  let two = Object.keys(hash).find(k => hash[k] > 1);
  while(two) {
    hash[two] -= 2;
    let next = String.fromCharCode(two.charCodeAt() + 1 > 122 ? 97 : two.charCodeAt() + 1);
    hash[next] = ++hash[next] || 1;
    two = Object.keys(hash).find(k => hash[k] > 1);
  }
  return Object.keys(hash).filter(k => hash[k] > 0).join('');
}