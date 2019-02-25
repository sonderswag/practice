const solution = require('./index.js');

describe('basic test', () => {
  test('given', () => {
    const T = [3,4,7,7,6,6];
    expect(solution(T)).toEqual(3);
  })

  test('given', () => {
    const T = [80, 80, 1000000000, 80, 80, 80, 80, 80, 80, 123456789];
    expect(solution(T)).toEqual(3);
  })

  test('given', () => {
    const T = [1,1];
    expect(solution(T)).toEqual(1);
  })

  test('given', () => {
    const T = [];
    expect(solution(T)).toEqual(0);
  })

  test('given', () => {
    const T = [1,2,3,4,5,6,7,8];
    expect(solution(T)).toEqual(4);
  })

  test('given', () => {
    const T = [1,1,1,1,1,2];
    expect(solution(T)).toEqual(2);
  })

  test('given', () => {
    const T = [1,1,1,1,1,1];
    expect(solution(T)).toEqual(1);
  })

  test('given', () => {
    const T = [2,1,1,1,1,3];
    expect(solution(T)).toEqual(3);
  })
})