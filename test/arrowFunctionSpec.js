describe('Arrow functions', () => {
  'use strict';

  it('Provide a compact syntax to define a function', () => {
    let add = (x,y) => x + y;
    expect(add(2,3)).toEqual(5);
  });

  it('Even more compact for a single parameter', () => {
    let square = x => x * x;
    expect(square(3)).toEqual(9);
  });

  it('Parenthesis required if function takes no parameters', () => {
    let three = () => 3;
    expect(three()).toEqual(3);
  });

  it('Curly braces and return statement needed for multi-line functio', () => {
    let doWork = (x, y) => {
      let temp = x + y;
      return temp;
    };
    expect(doWork(7, 3)).toEqual(10);
  });

  it('Can be used with array methods', () => {
    let numbers = [1, 2, 3, 4];

    let sum = 0;
    numbers.forEach( n => sum += n );
    expect(sum).toEqual(10);
  });

  it('More array methods', () => {
    let numbers = [1, 2, 3, 4];
    let doubled = numbers.map( n => n * 2 );
    expect(doubled).toEqual([2, 4, 6, 8]);
  });

});
