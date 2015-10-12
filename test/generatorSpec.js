describe('Generators', () => {

  it('Can build an iterable with hard-coded values', () => {
    let numbers = function*() {
      yield 1;
      yield 2;
      yield 3;
    };

    let sum = 0;
    let iterator = numbers();
    let next = iterator.next();
    while(!next.done) {
      sum += next.value;
      next = iterator.next();
    }

    expect(sum).toEqual(6);
  });

  it('Can build an iterable with dynamic values', () => {
    let numbers = function*() {
      for(let i=0; i <= 3; i++) {
        yield i;
      }
    };

    let sum = 0;
    let iterator = numbers();
    let next = iterator.next();
    while(!next.done) {
      sum += next.value;
      next = iterator.next();
    }

    expect(sum).toEqual(6);
  });

  it('Can accept parameters', () => {
    let numbers = function*(start, end) {
      for (let i=start; i <= end; i++) {
        yield i;
      }
    };

    let sum = 0;
    let iterator = numbers(2, 5);
    let next = iterator.next();
    while(!next.done) {
      sum += next.value;
      next = iterator.next();
    }

    expect(sum).toEqual(14);
  });

  it('Works together with for..of', () => {
    let numbers = function*(start, end) {
      for (let i=start; i <= end; i++) {
        yield i;
      }
    };

    let sum = 0;
    for(let n of numbers(2, 5)) {
      sum += n;
    }
    expect(sum).toEqual(14);
  });

});
