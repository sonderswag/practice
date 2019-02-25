function solution(T) {
  const me = [];
  const bro = [];

  const seen = {};

  let i = 0;
  while (me.length < T.length / 2 && bro.length < T.length / 2) {
    const candy = T[i];
    if (!seen[candy]) {
      me.push(candy);
      seen[candy] = true;
    } else {
      bro.push(candy)
    }
    i += 1;
  }


  if (bro.length !== T.length/2) {
    return me.length;
  }


  // then need to count the remainder of the unique
  let count = me.length;
  while (i < T.length) {
    if (!seen[T[i]]) {
      count += 1;
    }
    i += 1;
  }
  return count;
}

module.exports = solution; 