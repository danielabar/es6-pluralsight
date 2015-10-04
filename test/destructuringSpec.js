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

  });//Arrays

  describe('Objects', () => {

    it('can destructure objects', () => {
      let doWork = function() {
        return {
          firstName: 'Scott',
          lastName: 'Allen',
          twitter: 'OdeToCode'
        };
      };

      // Destructuring object assignment, we are NOT building an object literal here
      // NOTE that right hand side of the colon is the variable definition
      let {
        firstName: currentFirstName,
        twitter: currentTwitter
      } = doWork();

      expect(currentFirstName).toEqual('Scott');
      expect(currentTwitter).toEqual('OdeToCode');
    });

    it('can drill into complex objects', () => {
      let doWork = function() {
        return {
          firstName: 'Scott',
          lastName: 'Allen',
          handles: {
            twitter: 'OdeToCode',
            linkedin: 'SAllen'
          }
        };
      };

      // left hand side defines how you navigate the object
      // right hand side defines the variable
      let {
        handles : {twitter : currentTwitterHandle},
        handles : {linkedin : currentLinkedInHandle}
      } = doWork();

      expect(currentTwitterHandle).toEqual('OdeToCode');
      expect(currentLinkedInHandle).toEqual('SAllen');
    });

    it('supports short-hand syntax for same named variables', () => {
      let doWork = function() {
        return {
          firstName: 'Scott',
          lastName: 'Allen',
          handles: {
            twitter: 'OdeToCode',
            linkedin: 'SAllen'
          }
        };
      };

      let {
        firstName,
        handles : {twitter}
      } = doWork();

      expect(firstName).toEqual('Scott');
      expect(twitter).toEqual('OdeToCode');
    });

    it('works with parameters', () => {
      // doWork function destructures the object that is passed in as an argument
      let doWork = function(url, {data, cache}) {
        return data;
      };
      
      let result = doWork(
        'api/test', {
          data: 'test',
          cache: false
        }
      );

      expect(result).toBe('test');
    });

  });//Objects

});//Destructuring
