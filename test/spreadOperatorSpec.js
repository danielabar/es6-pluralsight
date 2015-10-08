/*eslint no-unused-vars:0*/
describe('Spread Operator', () => {
  'use strict';

  it('spreads an array across individual parameters', () => {
    let doWork = function(x, y, z) {
      return x + y + z;
    };

    var result = doWork(...[1, 2, 3]);

    expect(result).toBe(6);
  });

  it('builds arrays', () => {
    let a = [4, 5, 6],
      b = [1, 2, 3, ...a, 7, 8, 9];

    expect(b).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

});
