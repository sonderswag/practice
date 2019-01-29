const wordBreak = require('./index');

describe('word break', () => {
  test('given true', () => {
    const str = 'leetcode';
    const dict = ["leet", "code"];
    expect(wordBreak(str,dict)).toEqual(true);
  })

  test('given true - 2', () => {
    const str = 'applepenapple';
    const dict = ["apple", "pen"];
    expect(wordBreak(str,dict)).toEqual(true);
  })

  test('given false - 1', () => {
    const str = 'catsandog';
    const dict = ["cats", "dog", "sand", "and", "cat"];
    expect(wordBreak(str,dict)).toEqual(false);
  })

  test('stress test', () => {
    const str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
    const dict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
    expect(wordBreak(str,dict)).toEqual(false);
  })
});

