function knapsack(arr, weight) {
  const get_sub_sets = (index, selection = [], w_remain = weight) => {

      // base case out of index or at capacity 
      if (index >= arr.length || w_remain === 0) {
          const value = selection.reduce((agg, cur) => agg + arr[cur][1], 0);
          const weight = selection.reduce((agg, cur) => agg + arr[cur][0], 0);
          return {selection, value, weight};
      }

      // shouldn’t add item to selection bc overweight
      // console.log(index)
      if (w_remain - arr[index][0] < 0) {
        // skip item 
        const rtv = get_sub_sets(index + 1, selection, w_remain); 
        return rtv;

      }
      const v1 = get_sub_sets(index + 1, selection.concat([index]), w_remain - arr[index][0]);
      const v2 = get_sub_sets(index + 1, selection, w_remain); 
      const rtv = v1.value > v2.value ? v1 : v2; // key step only return the max 
      return rtv;
  }
  
  return get_sub_sets(0);
}

module.exports = knapsack;
