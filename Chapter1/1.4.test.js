const IsPalindromePermutation = require('./1.4');

describe('testing IsPalindromePermutation(string)', () => {
  test('empty string should return true', () => {
    expect(IsPalindromePermutation("")).toBe(true);
  });

  test('"tact coa" should return true', () => {
   expect(IsPalindromePermutation("tact coa" )).toBe(true);
  });

  test('"tact oa" should return false', () => {
   expect(IsPalindromePermutation("tact oa" )).toBe(false);
  });

  test('"tact ca" should return true', () => {
   expect(IsPalindromePermutation("tact ca" )).toBe(true);
  });
 
});
