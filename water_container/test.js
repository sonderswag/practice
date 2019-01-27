const maxArea = require('./index');

describe('finding the max area between 2 pillars', () => {
  test('given test', () => {
    const pillars = [1,8,6,2,5,4,8,3,7];
    expect(maxArea(pillars)).toEqual(49);
  })

  test('given test', () => {
    const pillars = [1,1];
    expect(maxArea(pillars)).toEqual(1);
  })

  test('given test', () => {
    const pillars = [1,2,3,4,5];
    expect(maxArea(pillars)).toEqual(6);
  })

  
})