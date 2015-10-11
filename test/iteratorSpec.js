import 'zloirock/core-js';

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
    let mytest = numbers.values();
    console.log(`=== my test iterator: ${mytest}`);
    // let next = iterator.next();
    // while(!next.done) {
    //   sum += next.value;
    //   next = iterator.next();
    // }
    //
    // expect(sum).toEqual(10);

  });

});
