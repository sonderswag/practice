
const repeatedStringMatch = (A, B) => {
  const count = Math.ceil(B.length / A.length)
  const str = A.repeat(count)
  if (str.includes(B)) {
      return count;
  } else if ((str + A).includes(B)) {
      return count + 1;
  }
  
  return -1; 
};


module.exports = repeatedStringMatch;