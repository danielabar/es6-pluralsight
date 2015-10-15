describe('object', () => {

  describe('is function', () => {

    it('compares two values that are different', () => {
      expect(Object.is(1, 2)).toBe(false);
    });

    it('compares two values that are the same', () => {
      expect(Object.is(1, 1)).toBe(true);
    });

    it('does not coerce values', () => {
      expect(Object.is(1, '1')).toBe(false);
    });

    it('considers positive and negative zero to be different', () => {
      expect(Object.is(0, -0)).toBe(false);
      expect(-0 === 0).toBe(true);
    });

    it('considers NaN to be NaN', () => {
      expect(Object.is(NaN, NaN)).toBe(true);
      /*eslint use-isnan: 0*/
      expect(NaN === NaN).toBe(false);
    });

  });

  describe('assign function', () => {

    it('applies mixins to objects', () => {
      let shark = {
        bite: function(target) {
          target.hurt = true;
        }
      };

      let person = {};

      let laser = {
        pewpew: function(target) {
          target.exploded = true;
        }
      };

      expect(shark.hasOwnProperty('pewpew')).toBe(false);

      // Object.assign(target, mixin),
      // Also supports multiple mixins: Object.assign(target, mixin1, mixin2)
      // After this shark has its own pewpew function, there is no forwarding going on
      Object.assign(shark, laser);

      expect(shark.hasOwnProperty('pewpew')).toBe(true);

      shark.pewpew(person);
      expect(person.exploded).toBe(true);
    });

  });

});
