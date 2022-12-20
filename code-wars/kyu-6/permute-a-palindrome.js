/*
Parameters: a str
Returns: a boolean
  whether any permutation of input str
  can be a palindrome
Examples:
  permuteAPalindrome("a"), true
  permuteAPalindrome("aa"), true
  permuteAPalindrome("baa"), true
  permuteAPalindrome("aab"), true
  permuteAPalindrome("baabcd"), false
  permuteAPalindrome("racecars"), false
  permuteAPalindrome("abcdefghba"), false
  permuteAPalindrome(""), true
Pseudocode:
  initialize a hash
  iterate over the length of the input str
    store each char in the hash as a key
    and its # of occurrences as its value
  initialize an odds var as an arr
    containing the chars from hash with an odd count
  return whether odds has a length of 1 or less
*/

function permuteAPalindrome (input) {
  const hash = {}, odds = [];
  for (const char of input) hash[char] = ++hash[char] || 1;
  for (const key in hash) {
    if (hash[key] % 2) odds.push(key);
    if (odds.length > 1) break;
  }
  return odds.length <= 1;
}

function permuteAPalindrome (input) {
  return Object.values([...input].reduce((o, k) => (o[k] = ++o[k] || 1, o), {})).filter(v => v % 2).length <= 1;
}

function permuteAPalindrome (input) {
  const hash = {};
  for (const char of input) hash[char] = ++hash[char] || 1;
  const odds = Object.keys(hash).filter(k => hash[k] % 2);
  return odds.length <= 1;
}