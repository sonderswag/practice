const addBoldTag = require('./index');

describe('adding bold tags to string', () => {
  test('given 1', () => {
    const str = "abcxyz123";
    const dict = ["abc","123"];
    expect(addBoldTag(str, dict)).toEqual("<b>abc</b>xyz<b>123</b>");
  })

  test('given 2', () => {
    const str = "aaabbcc";
    const dict = ["aaa","aab","bc"];
    expect(addBoldTag(str, dict)).toEqual("<b>aaabbc</b>c");
  })

  test('not starting in bold', () => {
    const str = "2aaabbcc";
    const dict = ["aaa","aab","bc"];
    expect(addBoldTag(str, dict)).toEqual("2<b>aaabbc</b>c");
  })

  test('repeated letters', () => {
    const str = "aaa";
    const dict = ["a"];
    expect(addBoldTag(str, dict)).toEqual("<b>aaa</b>");
  })
});