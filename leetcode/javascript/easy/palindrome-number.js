/**
 * @param {number} x
 * @return {boolean}
 */

// runtime beats 96.75%, memory beats 91.57%
var isPalindrome = function(x) {
  // convert to input num into str
  // iterate over half the length of numStr
      // check if char at current counter is equal to char at numStr length - 1 - counter
          // return false if not
  // return true (completing loops without satisfying internal condition means palindrome)

  for (let i = 0, s = `${x}`; i < (l = s.length) / 2; i++) if (s[i] !== s[l - 1 - i]) return false;
  return true;
};

console.log(isPalindrome(121), true);
console.log(isPalindrome(-121), false);
console.log(isPalindrome(10), false);