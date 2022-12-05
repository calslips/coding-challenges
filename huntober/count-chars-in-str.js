// Count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

// takes in a str, can be empty. will it always be a str?
// returns an obj, where the keys are the chars
// and the value is the count of those chars within the input str
// if str is empty, return empty obj

function countChars(str) {
  // initialize a hash var assigned to an empty obj
  // iterate over the chars of the input str
    // if current char exists within hash
      // increment its value
    // otherwise
      // add it as a key to hash with the value of 1
  // return hash

  // for loop
  // const hash = {};
  // for (let char of str) {
  //   if (char in hash) hash[char]++;
  //   else hash[char] = 1;
  // }
  // return hash;

  // methods
  return [...str].reduce((o, k) => (o[k] = ++o[k] || 1, o), {});
}

// examples
console.log(countChars('aba'), {'a': 2, 'b': 1});
console.log(countChars('bingbangboom'), {'b': 3, 'i': 1, 'n': 2, 'g': 2, 'a': 1, 'o': 2, 'm': 1});
console.log(countChars(''), {});