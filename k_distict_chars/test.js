const lengthOfLongestSubstringKDistinct = require('./index');

describe('length of unique sub', () => {
  test('given - 1 ', () => {
    const data = 'eceba';
    expect(lengthOfLongestSubstringKDistinct(data,2)).toEqual(3);
  })

  test('given - 2 ', () => {
    const data = 'aa';
    expect(lengthOfLongestSubstringKDistinct(data,1)).toEqual(2);
  })

  test('edge', () => {
    const data = 'aa';
    expect(lengthOfLongestSubstringKDistinct("",0)).toEqual(0);
  })
})