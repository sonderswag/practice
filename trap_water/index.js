function trap(height) {
  const fill = height.map(item => 0);
  let left = 0;
  let right = height.length - 1;
  
  const fillIn = (start, stop) => {
      // determine in height 
      const fillHeight = height[start] > height[stop] ? height[stop] : height[start]
      for (let i = start + 1; i < stop; i+= 1) {
          if (fillHeight > height[i]) {
              fill[i] = fillHeight - height[i];
          }
      }
  }

  while (left < right) {
      if (height[left] && height[right] && !fill[left] && !fill[right]) {
        fillIn(left, right);
      }
      // let match = findTallest(i);
      if (height[left] < height[right]) {
        left += 1;
      } else {
        right -= 1;
      }
    
  }

  return fill.reduce((acc, cur) => acc + cur, 0);
}


var trap0 = function(height) {
  let maxVal = height.reduce((acc, cur) => acc > cur ? acc : cur, height[0]);
  let maxIn = height.indexOf(maxVal); 

  let count = 0;
  
  // look left 
  let curMax = - Infinity;
  for (let i = 0; i < maxIn; i += 1) {

    if (height[i] > curMax) {
      curMax = height[i]
    } else {
      count += curMax - height[i];
    }
  }

  
  //look right
  curMax = - Infinity;
  for (let i = height.length - 1; i > maxIn; i -= 1) {
    if (height[i] > curMax) {
      curMax = height[i]
    } else {
      count += curMax - height[i];
    }
  }
  
  return count;
};

module.exports = trap;