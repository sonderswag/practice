const kEmptySlots = require('./index');

describe('k empty slots', () => {
  test('given case', () => {
    const flowers = [1,3,2];
    expect(kEmptySlots(flowers,1)).toEqual(2);
  })

  test('bad case', () => {
    const flowers = [1,2,3];
    expect(kEmptySlots(flowers, 1)).toEqual(-1);
  })

  test('my case', () => {
    const flowers = [1,3,7,4,5,2,6];
    expect(kEmptySlots(flowers, 2)).toEqual(4);
  })

  test('my case', () => {
    const flowers = [6,5,8,9,7,1,10,2,3,4];
    expect(kEmptySlots(flowers, 2)).toEqual(8);
  })

})