const trap = require('./index');

describe('trap', () => {
  test('given', () => {
    const data = [0,1,0,2,1,0,1,3,2,1,2,1];
    expect(trap(data)).toEqual(6);
  })

  test('dev case', () => {
    const data = [0,1,0,4,1,0,1,3,2,1,2,1];
    expect(trap(data)).toEqual(9);
  })

  test('edge case', () => {
    const data = [0,0,1,0,0];
    expect(trap(data)).toEqual(0);
  })

  test('tie for tallest', () => {
    const data = [1,0,1,0,1];
    expect(trap(data)).toEqual(2);
  })

  test('trailing zero', () => {
    const data = [1,0,1,0,1,0];
    expect(trap(data)).toEqual(2);
  })
})