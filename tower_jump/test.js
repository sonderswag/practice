const isHoppable = require('./index');

describe('the hopping function', () => {
  test('given case', () => {
    const towers = [4,2,0,0,2,0];
    expect(isHoppable(towers)).toEqual(true);
  })

  test('given false case', () => {
    const towers = [1, 0];
    expect(isHoppable(towers)).toEqual(false);
  })

  test('null case', () => {
    const towers = [];
    expect(isHoppable(towers)).toEqual(null);
  })

  test('starting zero', () => {
    const towers = [0, 1, 5];
    expect(isHoppable(towers)).toEqual(false);
  })

  test('increasing down', () => {
    const towers = [5, 4, 3, 2, 1, 0];
    expect(isHoppable(towers)).toEqual(false);
  })

  test('bigger positive case', () => {
    const towers = [5, 3, 0, 0, 0, 2, 0];
    expect(isHoppable(towers)).toEqual(true);
  })
});
