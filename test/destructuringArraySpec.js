/*eslint no-unused-vars:0*/
describe('Destructuring', () => {
  'use strict';

  describe('Arrays', () => {

    it('can destructure arrays', () => {
      let doWork = function() {
        return [3, 2];
      };

      // This is the destructuring assignment
      let [x, y] = doWork();

      expect(x).toBe(3);
      expect(y).toBe(2);
    });

    it('can use comma to skip some value', () => {
      let doWork = function() {
        return [1, 3, 2];
      };

      let [, x, y] = doWork();

      expect(x).toBe(3);
      expect(y).toBe(2);
    });

    it('returns undefined if try to go past end', () => {
      let doWork = function() {
        return [3, 2];
      };

      let [x, y, z] = doWork();

      expect(x).toBe(3);
      expect(y).toBe(2);
      expect(z).toBeUndefined();
    });

  });

});
