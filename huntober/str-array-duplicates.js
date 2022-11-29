// You will be given an array of strings and your task is to
// remove all consecutive duplicate letters from each string in the array.
// Strings will be lowercase only, no spaces

// takes in an array of strings
// each string will always be lowercase, no spaces
// return an array of strings
// removing any consecutive duplicates from each string

function dup(arr) {
  // map over each str in the input array
    // initialize a nonDup var assigned to an empty str
    // iterate over the letters of the str
      // if current char is NOT the same as next
        // concat current char with nonDup str
    // return nonDup to replace og str
  // return mapped arr

  // return arr.map(s => [...s].reduce((p, c) => p.at(-1) === c ? p : p + c, ''));
  return arr.map(s => [...s].filter((c, i) => c !== s[++i]).join(''));
}

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]), ['codewars','picaniny','hubububo']);
console.log(dup(["abracadabra","allottee","assessee"]), ['abracadabra','alote','asese']);
console.log(dup(["kelless","keenness"]), ['keles','kenes']);