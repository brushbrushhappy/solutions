const isUniqueChars = require('./1.1');

describe('testing isUniqueChars(string)', () => {
  test('empty string should return true', () => {
    expect(isUniqueChars('')).toBe(true);
  });

  test('"a" should return true', () => {
    expect(isUniqueChars('a')).toBe(true);
  });

  test('"abcde" should return true', () => {
    expect(isUniqueChars('abcde')).toBe(true);
  });

  test('"abcade" should return false', () => {
    expect(isUniqueChars('abcade')).toBe(false);
  });
});
