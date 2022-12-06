/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// worst runtime, 2nd memory (10.62%, 45.3%)
const numJewelsInStones = function(jewels, stones) {
  // initialize count var assigned to 0
  // split jewels into an arr of chars
  // iterate over jewels arr
      // while stones includes current jewel
          // increment count
          // reassign stones to equal
              // stones sliced from 0 to jewel index
              // concatted with stones sliced from jewel index + 1 to end
  // return count

  return [...jewels].reduce((c, j) => {
      while((i = stones.indexOf(j)) > -1) c++, stones = stones.slice(0, i) + stones.slice(++i);
      return c;
  }, 0);
};

// 3rd runtime, best memory (88.16%, 89.82%)
const numJewelsInStones = function(jewels, stones) {
  // initialize a hash to keep track of jewel count in stones
  // iterate over stones
      // if current stone exists as a prop in hash
          // increment its value by 1
      // otherwise if current stone exists in jewels str
          // initialize current stone as a key in hash with a value of one
  // return the sum of all values found in hash

  const hash = {};
  [...stones].forEach(s => {
      if (s in hash) hash[s]++;
      else if (jewels.includes(s)) hash[s] = 1;
  });
  return Object.values(hash).reduce((s, n) => s + n, 0);
};

// best runtime, 3rd memory (95.3%, 20.79%)
const numJewelsInStones = function(jewels, stones) {
  // reduce jewels into a hash containing each jewel as a key with a 0 value
  // iterate over stones
    // if current stone exists as a key in count hash
      // increment count by 1
  // return the sum of all values found in hash

  const hash = [...jewels].reduce((o, k) => (o[k] = 0, o), {});
  [...stones].forEach(s => {if (s in hash) hash[s]++});
  return Object.values(hash).reduce((s, n) => s + n, 0);
};

// 2nd runtime, worst memory (91.93%, 13.75%)
const numJewelsInStones = function(jewels, stones) {
  let hash = {}, sum = 0;
  for (let jewel of jewels) hash[jewel] = 0;
  for (let stone of stones) if (stone in hash) hash[stone]++;
  for (let count in hash) sum += hash[count];
  return sum;
};

// examples
console.log(numJewelsInStones("aA", "aAAbbbb"), 3);
console.log(numJewelsInStones("z", "Z"), 0);