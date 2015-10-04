/*eslint no-unused-vars:0*/
describe('Destructuring', () => {
  'use strict';

  it('can destructure arrays', () => {
    let x = 2;
    let y = 3;

    [x, y] = [y, x];

    expect(x).toBe(3);
    expect(y).toBe(2);
  });

});
