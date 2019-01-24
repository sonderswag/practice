// function combination(array, k) {
//   const rtv = calCombo(array, k);
//   return rtv;
// }

// // calculate using power set method 
// function calCombo(array, k, pos=0, group = [], rtv = []) {
//   if (group.length === k) {
//     rtv.push(group)
//     return;
//   }

//   if (pos === array.length) {
//     return;
//   }

//   // left don't add anything to group 
//   calCombo(array, k, pos+1, group, rtv);

//   // right add current position to group 
//   // need to create a new array with an appended value
//   const newGroup = group.concat([array[pos]]);
//   calCombo(array, k, pos+1, newGroup, rtv);
//   return rtv;
// }

function combination(array, k) {
  let rtv = [];

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


module.exports = combination;