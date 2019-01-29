// another solution would have been BFS
var wordBreak = function(s, wordDict) {
    
  const lookUpTable = {};
  const strTable = {};
  const lookUp = (str) => {
    if (lookUpTable[str]) {
      return lookUpTable[str];
    }
      lookUpTable[str] = wordDict.includes(str); // O(n) 
      return lookUpTable[str];
  }
  
  const breakIt = (str) => {
    if (lookUp(str)) {
      return true;
    }
    if (strTable[str] === false) {
      return false;
    }
    let searchString = "";
    for (let i = 0; i < str.length ; i += 1) {
      searchString += str[i];
      if(lookUp(searchString)) {
        let subString = str.slice(i+1)
        if(breakIt(subString)) {
          return true;
        }
        strTable[subString] = false;
      }
    }

    return false;
  }
  return breakIt(s);
};



module.exports = wordBreak;
