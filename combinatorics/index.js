// this uses the same take leave method that the knap sack uses
function combination(array, k) {
  let rtv = [];

  // this is also diong DFS 
  function calCombo(pos=0, group = []) {
    if (group.length === k) {
      rtv.push(group)
      return;
    }
  
    if (pos === array.length) {
      return;
    }
  
    // left don't add anything to group 
    calCombo(pos+1, group);
  
    // right add current position to group 
    // need to create a new array with an appended value
    const newGroup = group.concat([array[pos]]);
    calCombo(pos+1, newGroup);
    // return rtv;
  }

  calCombo();
  return rtv;
}

// k is the number we choose from it
// slowly build the permutations one letter at at a time 
// the recursion tree will be n deep and n!/(n-k)! wide at the end
function permutation(array, k) {
  const input = typeof array === 'string' ? array.split('') : array
  const choose = k || array.length;
  const rtv = [];


  // this is diong DFS
  const genPerm = (arr, current = '') => {
    if (current.length === choose) {
      rtv.push(current);
      return
    }

    arr.forEach((item, index) => {
      const shortenArr = arr.slice(0, index).concat(arr.slice(index+1)); // take out a letter 
      const extendedArr = current + item;
      genPerm(shortenArr, extendedArr);
    })
  }
  
  genPerm(input);
  return rtv;
}


module.exports = {
  combination,
  permutation
}