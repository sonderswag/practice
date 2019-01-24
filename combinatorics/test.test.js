const combination = require('./index');

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