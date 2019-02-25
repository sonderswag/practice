const numIslands = require('./index');

describe('basic test', () => {
  test('given', () => {
    const input = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
    expect(numIslands(input)).toEqual(1);
  })

  test('no island', () => {
    const input = [["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"]];
    expect(numIslands(input)).toEqual(0);
  })

  test('null input', () => {
    const input = [[]];
    expect(numIslands(input)).toEqual(0);
  })

  test('2 opposite ends', () => {
    const input = [["1","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","1"]];
    expect(numIslands(input)).toEqual(2);
  })

  test('another given', () => {
    const input = [["1","1","1"],["0","1","0"],["1","1","1"]];
    expect(numIslands(input)).toEqual(1);
  })

  test('yet another given', () => {
    const input = [["1","0","1","1","1"],["1","0","1","0","1"],["1","1","1","0","1"]]
    expect(numIslands(input)).toEqual(1);
  })
})
