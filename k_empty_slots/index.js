var kEmptySlots = function(flowers, k) {
    const blooming = new Array(flowers.length).fill(0);

    const testGaps = (day) => {
      const index = day - 1;
      let blooms = 0;
      // check left
      if (index - (k+1) >= 0 && blooming[index - (k+1)]) {
        blooms = blooming.slice(index - k, index).reduce((acc, cur) => acc + cur, 0);
        if (blooms === 0) {
          return true;
        }
      }
      //check right 
      if (index + (k + 1) < flowers.length && blooming[index + k + 1]) {
        blooms = blooming.slice(index + 1, index + k + 1).reduce((acc, cur) => acc + cur, 0);
        if (blooms === 0) {
          return true;
        }
      }
    }

    for (let i = 0; i < flowers.length; i += 1) {
      blooming[flowers[i] - 1] = 1;
      if (testGaps(flowers[i])) {
        return i + 1;
      }
    }
    return -1;
};

module.exports = kEmptySlots;