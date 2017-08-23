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

  test('"ABCDEFG" should return true', () => {
    expect(isUniqueChars('ABCDEFG')).toBe(true);
  });

  test('"ABCDAEFG" should return false', () => {
    expect(isUniqueChars('ABCDAEFG')).toBe(false);
  });

  test('"1236456" should return false', () => {
    expect(isUniqueChars('1236456')).toBe(false);
  });

  test('"{}:"<>()_+}" should return false', () => {
    expect(isUniqueChars('{}:"<>()_+}')).toBe(false);
  });

  test('"~!@#$%^&*()" should return false', () => {
    expect(isUniqueChars('~!@#$%^&*()')).toBe(false);
  });
});
