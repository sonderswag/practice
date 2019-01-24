const addTwoNumbers = require('./index.js');

function* input(arr) {
  const values = arr.reverse();
  for (let i in values) {
    yield i
  }
  return null
}

test('addTwoNumbers function exists', () => {
  expect(typeof addTwoNumbers).toEqual('function');
});

test('add basic numbers', () => {
  const l1 = input([1,2,3]);
  const l1 = input([1,2,3]);
  expect(addTwoNumbers(l1,l2)).toEqual()
})

