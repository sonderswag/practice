const knapsack = require('./index');

describe('knapsack', () => {
  
  test('weight 6', () => {
    const data = [
      [1,3],
      [2,5],
      [4,2],
      [2,6],
      [5,8],
    ]
    expect(knapsack(data, 6)).toEqual({selection: [0, 1, 3], value: 14, weight: 5});
  })

  test('null', () => {
    const data = []
    expect(knapsack(data, 6)).toEqual({selection: [], value: 0, weight: 0});
  })

  test('too big', () => {
    const data = [
      [10,3],
      [20,5],
      [40,2],
      [20,6],
      [50,8],
    ]
    expect(knapsack(data, 6)).toEqual({selection: [], value: 0, weight: 0});
  })


  test('stress test', () => {
    const data = [
      [1,3], 
      [2,5], 
      [4,2], 
      [2,6],
      [5,8], 
      [1,3], 
      [2,5],
      [4,2], 
      [2,6], 
      [5,8],
      [1,3], 
      [2,5],
      [4,2],
      [2,6], 
      [5,8],
      [1,3], 
      [2,5], 
      [4,2],
      [2,6],  
      [5,8],
    ]
    expect(knapsack(data, 14)).toEqual( {selection: [0, 3, 5, 8, 10, 13, 15, 16, 18], value: 41, weight: 14});
  })
})