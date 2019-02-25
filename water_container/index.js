// 

function maxArea0(pillars) {
  let max = -Infinity;
  let i = 0; 
  
  const findMax = (index) => {
    const cHeight = pillars[index];
    let localMax = -Infinity; 
    for (let j = pillars.length - 1; j > index; j -= 1) {
      const width = j - index; 
      const height = pillars[j] > cHeight ? cHeight : pillars[j];
      if (width * height > localMax) {
        localMax = width*height;
      }
      // short circuit ending
      if (pillars[j] >= cHeight) {
        return localMax;
      }
    }
    return localMax; 
  }
  
  while (i < pillars.length) {
    // check to see if max is even possible
    let potential = pillars[i] * (pillars.length - 1 - i);
    if (potential <= max) { // big time saver
      i += 1; 
      continue;
    }
    // now look for the max 
    const localMax = findMax(i); 
    max = max > localMax ? max : localMax;
    i += 1; 
  }
  return max;
}

// using the 2 pointer method 
// works because want to maximize distance and height.
// restricted by the height of one of the 2 pillarss
function maxArea(pillars) {
  let max = -Infinity;
  let start = 0;
  let end = pillars.length - 1;
  while (start < end) {
    let width = end - start;
    let height = pillars[start] > pillars[end] ? pillars[end] : pillars[start];
    if (width * height > max) {
      max = width * height;
    }
    if (pillars[start] > pillars[end]) {
      end -= 1;
    } else {
      start += 1;
    }
  }
  return max;
}


module.exports = maxArea;