/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  // this is a niave solution which is N^2 
  // for ( var i = 0 ; i < nums.length-1 ; i++) {
  //     for (var j = i+1; j < nums.length ; j++) {
  //         if ((nums[i] + nums[j]) === target) {
  //             return [i, j];
  //         }
  //     }
  // }
  
  // think about time to look up
  
  // one pass to push things into hash table 
  let table = []; // index is value, value is original index 
  nums.forEach((el, index) => {
      table[el] = index;
  })
  // another pass to check to see if compliment value is in hash table 
  for (var i = 0; i < nums.length ; i ++) {
      const compliment = target - nums[i];
 
      // see if compliment is in table 
      if (table[compliment] !== undefined && table[compliment] !== i ) {
          
          return [i, table[compliment]]
      }
  }
};