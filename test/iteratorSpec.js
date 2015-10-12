describe('Iterables', () => {
  'use strict';

  it('Works with iterators at a low level', () => {
    let sum = 0,
      numbers = [1, 2, 3, 4];

    // for loop
    sum = 0;
    for(let i=0; i<numbers.length; i++) {
      sum += numbers[i];
    }
    expect(sum).toEqual(10);

    // for in
    sum = 0;
    for(let i in numbers) {
      sum += numbers[i];
    }
    expect(sum).toEqual(10);

    // iterator
    sum = 0;
    let iterator = numbers.values();
    let next = iterator.next();
    while (!next.done) {
      sum += next.value;
      next = iterator.next();
    }
    expect(sum).toEqual(10);
  });

  it('for..of works with iterators at a high level', () => {
    let sum = 0,
      numbers = [1, 2, 3, 4];

    for (let n of numbers) {
      sum += n;
    }

    expect(sum).toEqual(10);
  });

});
