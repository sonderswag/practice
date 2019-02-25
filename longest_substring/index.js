/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  let curLength = 0;
  let seen = {};
  for (let i = 0 ; i < s.length ; i += 1) {
    if (s[i] in seen) {
      longest = longest > curLength ? longest : curLength; // determine if it is the max
      seen = {} // reset seen
      i -= curLength - 1; // set i back remove only the furthest back if greater than zero 
      curLength = 0;
    }
    curLength += 1;
    seen[s[i]] = 1;
  }
  return longest > curLength ? longest : curLength;;
};


module.exports = lengthOfLongestSubstring;