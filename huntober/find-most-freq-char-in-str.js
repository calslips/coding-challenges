// Given a string of characters, return the character that appears the most often.
// No String or Array Methods (well brute force it first, but then no methods)!

// input: str (of varying length), containing chars, letters, spaces, etc.
// output: str (length of 1), the most freq appearing char in input
  // what about ties? will return the one that appears first
  // does casing matter? sure

  function max(str) {
    // initialize a hash var assigned to an empty obj
    // initialize max var assigned to 0
    // initialize maxChar var assigned to an empty str
    // iterate over the length of input str
      // if current char exists as a key in hash
        // increment its value
      // otherwise
        // set the char as a key in hash with the value of 1
      // if hash at char value is greater than max
        // reassign max to equal value
        // reassign maxChar to equal char
    // return maxChar

    let hash = {}, max = 0, maxChar = '';
    for (const char of str) {
      char in hash ? hash[char]++ : hash[char] = 1;
      if (hash[char] > max) max = hash[char], maxChar = char;
    }
    return maxChar;
  }

  // examples
  console.log(max("Hello World!"), "l");
  console.log(max("Whim Wham Flim Flam"), "m");
  console.log(max("aaaaAAAAbbbbbBBBBBccccCCCCdddddDDDDD"), "b");
  console.log(max(""), "");