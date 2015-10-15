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

  describe('property initializer shorthand', () => {
    it('creates properties', () => {
      let model = 'Ford',
        year = 1969;

      let classic = {
        model,
        year
      };

      expect(classic.model).toEqual('Ford');
      expect(classic.year).toEqual(1969);
    });
  });

  describe('method initializer shorthand', () => {
    it('creates methods using shorthand', () => {
      let server = {
        getPort() {
          return 8080;
        }
      };

      expect(server.getPort()).toEqual(8080);
    });
  });

  describe('computed property names', () => {

    it('supports variables for property names', () => {
      function createSimpleObject(propName, propVal) {
        // square brackets allow expressions to be passed for proerty name
        return {
          [propName]:propVal
        };
      }
      let foo = createSimpleObject('size', 'small');

      expect(foo.hasOwnProperty('size')).toBe(true);
      expect(foo.size).toEqual('small');
    });

    it('supports template strings or string concatenation', () => {
      function createTriumvirate(first, second, third) {
        return {
          [`member_${first.name}`]:first,
          [`member_${second.name}`]:second,
          [`member_${third.name}`]:third
        };
      }

      let joe = {name: 'Joe'},
        ralph = {name: 'Ralph'},
        harry = {name: 'Harry'};

      let council = createTriumvirate(joe, ralph, harry);

      expect(council.member_Joe).toBe(joe);
      expect(council.member_Ralph).toBe(ralph);
      expect(council.member_Harry).toBe(harry);
    });

  });

});
