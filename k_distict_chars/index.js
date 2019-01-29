/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  if (s.length === 0) {
    return 0;
  }
  const count = {};
  let kCount = 0;
  // add and return number of k’s 
  const add = (letter) => {
    if (!count[letter]) {
      kCount += 1; // adding new letter
      count[letter] = 0;
    }
    count[letter] += 1;
  }

  const remove = (letter) => {
    count[letter] -= 1;
    if (count[letter] === 0) {
      kCount -= 1;
    }
  }

  let maxLength = -Infinity;

  let back = 0;
  for (let front = 0; front < s.length ; front += 1) {
    add(s[front]);
    if (kCount > k) {
      while (kCount > k) {
      remove(s[back]);
      back += 1;
      }
    }
    maxLength = Math.max(front - back, maxLength); 
  }
  return maxLength + 1; 
};


module.exports = lengthOfLongestSubstringKDistinct;