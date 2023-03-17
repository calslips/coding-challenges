/*
A file's hash value is essentially a string of numbers and
letters of fixed length, that functions as a cryptographic
fingerprint for that file.

File hashes are commonly used in cyber security to identify
different strains of malware, with a unique hash value
corresponding to each malware file.

Your junior analyst has just sent you a list of new malware
hashes, but you know he has made mistakes entering them.
Write a function to validate the array of hash values.

In this scenario, a valid hash value consists of five numbers
and five lowercase letters in any order.

Return an array of valid hash values, and eliminate any duplicates.

Parameters: an array of hashes
Returns: an array of valid hashes
Examples:
  malwareValidate(['asdfiasdfg', "jsdfasdf14", "a212sdf345", "as00yud567", "as34asd567", "agsdgreast", "1dfg23asd4", "hjkjw98076", "fdsqweqrah", "12gh34gh1g"]),
    [ 'as00yud567', 'as34asd567', 'hjkjw98076', '12gh34gh1g' ]
  malwareValidate(['06v58j56se','075d6u4k54','09iasdfue809rs','0o568h016k','0324g2keub','0aoq14','0pl3p5asdfxpa4','05ow0asdf6cgkb','037op7o','0mckp4k8']),
    [ '0324g2keub' ]
  malwareValidate(['04tg9(<)ad','0s85eknq65','0664^*<i2v','06.x>3f:63','02.:568nd:','02tp6zse24','09nms72p1g','08a1s01d29','0!emdgxf3m','0e9,870ugc']),
    [ '0s85eknq65', '02tp6zse24', '09nms72p1g' ]
  malwareValidate(['0s85ebgf65','0s85ebgf65','0664^*<i2v','06.x>3f:63','02.:568nd:','02tp6zse24','09nms72p1g','08a1s01d29','0!emdgxf3m','0e9,870ugc']),
    [ '0s85ebgf65', '02tp6zse24', '09nms72p1g' ]
Pseudocode:
  create a set from the hash array
  filter set
    remove invalid hashes (needs 5 nums & 5 lowercase letters)
  return filtered set of hashes
*/

function malwareValidate(hashArr) {
  return [...new Set(hashArr)].filter(h => h.length === 10 && (o = [...h].reduce((o, k) => (isNaN(k) ? k.charCodeAt() > 96 && k.charCodeAt() < 123 && (o.s += k) : o.n += k, o), {s:'', n:''})).s.length === 5 && o.n.length === 5);
}