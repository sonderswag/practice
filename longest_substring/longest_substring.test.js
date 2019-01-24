const lengthOfLongestSubstring = require('./index.js');

test('lengthOfLongestSubstring function exists', () => {
  expect(typeof lengthOfLongestSubstring).toEqual('function');
});

test('abcabcbb', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
})

test('bbbbb', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
})

test('pwwkew', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
})

test('single letter', () => {
  expect(lengthOfLongestSubstring('p')).toEqual(1);
})

test('longest is at the end', () => {
  expect(lengthOfLongestSubstring('aaaaaaapew')).toEqual(4);
})

test('longest is in middle', () => {
  expect(lengthOfLongestSubstring('dvdf')).toEqual(3);
})
