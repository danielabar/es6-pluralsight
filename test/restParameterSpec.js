/*eslint no-unused-vars:0*/
describe('Rest parameters', () => {
  'use strict';

  it('Is like varargs', () => {
    let doWork = function(name, ...numbers) {
      let result = 0;
      numbers.forEach( n => result += n );
      return result;
    };

    let result = doWork('Scott', 1, 2, 3);
    expect(result).toEqual(6);
  });

  it('Are an empty array if no values passed', () => {
    // No need for null/undefined handling on numbers
    let doWork = function(name, ...numbers) {
      let result = 0;
      numbers.forEach( n => result += n );
      return result;
    };

    let result = doWork('Scott');
    expect(result).toEqual(0);
  });
});
