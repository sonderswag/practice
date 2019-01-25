const {combination, permutation} = require('./index');

describe('test combo function with proper functions', () => {
  test('n = 2, k=1', () => {
    const value = combination(['A', 'B'], 1);
    expect(value).toContainEqual(['A']);
    expect(value).toContainEqual(['B']);
  });

  test('n = 2, k=2', () => {
    const value = combination(['A', 'B'], 2);
    expect(value.sort()).toContainEqual(['A', 'B'])
  })

  test('n = 3, k=2', () => {
    const value = combination(['A', 'B', 'C'], 2);
    expect(value.sort()).toContainEqual(['A', 'B'])
    expect(value.sort()).toContainEqual(['A', 'C'])
    expect(value.sort()).toContainEqual(['B', 'C'])
  })

  test('n = 4, k=3', () => {
    const value = combination(['A', 'B', 'C', 'D'], 3);
    expect(value.sort()).toContainEqual(['A', 'B', 'C']);
    expect(value.sort()).toContainEqual(['A', 'B', 'D']);
    expect(value.sort()).toContainEqual(['A', 'C', 'D']);
    expect(value.sort()).toContainEqual(['B', 'C', 'D']);
  })
})

describe.only('test permutation', () => {
  test('ABC, all', () => {
    expect(permutation('ABC').sort()).toEqual(['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']);
  })

  test('ABC, choose 2', () => {
    expect(permutation('ABC', 2).sort()).toEqual(['AB', 'AC', 'BA', 'BC', 'CA', 'CB']);
  })

  test('ABC, choose 1', () => {
    expect(permutation('ABC', 1).sort()).toEqual(['A', 'B', 'C']);
  })

  test('ABCD, choose 2', () => {
    expect(permutation('ABCD', 2).sort()).toEqual(["AB", "AC", "AD", "BA", "BC", "BD", "CA", "CB", "CD", "DA", "DB", "DC"]);
  })

  test('ABCD, choose 3', () => {
    expect(permutation('ABCD', 3).sort()).toEqual(["ABC", "ABD", "ACB", "ACD", "ADB", "ADC", "BAC", "BAD", "BCA", "BCD", "BDA", "BDC", "CAB", "CAD", "CBA", "CBD", "CDA", "CDB", "DAB", "DAC", "DBA", "DBC", "DCA", "DCB"]);
  })
})