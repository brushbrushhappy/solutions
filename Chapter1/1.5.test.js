const oneAway = require('./1.5');

describe('testing oneAway(string)', () => {
  test('empty strings should return true', () => {
    expect(oneAway('',"")).toBe(true);
  });

  test('"pale","ple" should return true', () => {
   expect(oneAway('',"")).toBe(true);
  });

  test('"abcde" should return true', () => {
   expect(oneAway("pale","ple" )).toBe(true);
  });

  test('"pales","pale"  should return true', () => {
   expect(oneAway("pales","pale" )).toBe(true);
  });
  test('"pale","bale"  should return true', () => {
   expect(oneAway("pale","bale" )).toBe(true);
  });
  test('"pale","bake"  should return false', () => {
   expect(oneAway("pale","bake" )).toBe(false);
  });
});
