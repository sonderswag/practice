const repeatedStringMatch = require('./index');

describe('basic test', () => {
  test('default case', () => {
    const A = 'abcd';
    const B = 'cdabcdab';

    expect(repeatedStringMatch(A,B)).toEqual(3);
  })

  test('default case 1', () => {
    const A = 'abcd';
    const B = 'abcdabcd';

    expect(repeatedStringMatch(A,B)).toEqual(2);
  })

  test('A > B', () => {
    const A = 'abcde';
    const B = 'cde';
    expect(repeatedStringMatch(A,B)).toEqual(1);
  })

  test('B > A', () => {
    const A = 'abc';
    const B = 'bcabcabcab';
    expect(repeatedStringMatch(A,B)).toEqual(4);
  })

  test('break pattern', () => {
    const A = 'abc';
    const B = 'bcabcb';
    expect(repeatedStringMatch(A,B)).toEqual(-1);
  })

  test('bad letter', () => {
    const A = 'abce';
    const B = 'bcabc';
    expect(repeatedStringMatch(A,B)).toEqual(-1);
  })

  test('repeated letter offset B > A', () => {
    const A = 'aaac';
    const B = 'aacaaac';
    expect(repeatedStringMatch(A,B)).toEqual(2);
  })

  test('repeated letter offset B < A', () => {
    const A = 'aaac';
    const B = 'aac';
    expect(repeatedStringMatch(A,B)).toEqual(1);
  })

  test('another repeating input', () => {
    const A = 'a';
    const B = 'aa';
    expect(repeatedStringMatch(A,B)).toEqual(2);
  })

  test.only('ending wrong', () => {
    const A = 'aaab';
    const B = 'ba';
    expect(repeatedStringMatch(A,B)).toEqual(2);
  })


  test('another', () => {
    const A = 'abab';
    const B = 'aba';
    expect(repeatedStringMatch(A,B)).toEqual(1);
  })

})