/**
 * @param {string} s
 * @return {string}
 */

 // this is an O(n^3) solution that is pretty much a brute force approach 
 // take a letter O(n)
 // search starting a letter equal to it O(n)
 // if found check to see if it a palidrome O(n)
var longestPalindrome0 = function(s) {
  if (s.length <= 1) {
      return s;
  }
  
  let max = {start: s.length - 1, end: s.length};
  const checkPalidrome = (start, end) => {
      while (start < end) {
          if (s[start] != s[end]) {
              return false;
          }
          start += 1;
          end -= 1; 
      }
      return true; 
  }

  
  for (let i = 0; i < s.length; i+= 1) {
      for (let j = s.length - 1; j > i; j -= 1) {
          if (s[i] === s[j] && checkPalidrome(i+1, j-1)) {
                  if (max.end - max.start < j + 1 - i) {
                      max.start = i;
                      max.end = j + 1;
                  }

          }
      }
  }    
  return s.slice(max.start, max.end);

};

/**
 * @param {string} s
 * @return {string}
 */

 // this is a O(n^2) solution 
 // take a letter O(n)
 // radiating out from the letter see if it is the middle of a palidrome O(n)
var longestPalindrome = function(s) {
  if (s.length <= 1) {
      return s;
  }
  
  let max = {start: 0, end: 0};
  const checkPalidromeCenter = (left, right) => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          left -= 1;
          right += 1; 
      }
      return right - left - 1; 
  }

  
  for (let i = 0; i < s.length; i+= 1) {
    // potential odd
    const len1 = checkPalidromeCenter(i,i);
    const len2 = checkPalidromeCenter(i, i+1);
    const len = Math.max(len1, len2);
    console.log(len, i)
    if (len > max.end - max.start) {
      max.start = i - Math.floor((len - 1) / 2); 
      max.end = i + Math.floor(len / 2);
    }
    
  }    
  return s.slice(max.start, max.end + 1);

};