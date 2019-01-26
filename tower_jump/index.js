function isHoppable(towers){
  let index = 0;
  if (towers[0] === 0) {
      return false;
  }

  while (index < towers.length) {
      // the furthest index I can reach
    const reach = index + towers[index];
    if (reach >= towers.length) {
        return true; 
    }
      let maxIndex = undefined;
      let maxValue = -Infinity;
      for (let i = reach ; i > index; i -= 1) {
          let pValue = towers[i] + (i - index); 
          if (pValue > maxValue) {
              maxValue = pValue;
              maxIndex = i;
          }
      }
      index = maxIndex;
      if (towers[index] === 0) {
          return false;
      }
    }
  return null; // this is for debugging to know something didn’t go as expected
}

module.exports = isHoppable;