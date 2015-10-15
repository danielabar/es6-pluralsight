import {Company} from '../src/generatorExample';

describe('Functional generators', () => {

  it('Iterates company employees', () => {
    let count = 0;
    let company = new Company();
    company.addEmployees('Tim', 'Sue', 'John', 'Tom');

    for(let employee of company) {
      expect(employee).toBeDefined();
      count += 1;
    }

    expect(count).toEqual(4);
  });

  it('Can be used to build a filter function and lazy evaluation', () => {

    // generic filter function, works against anything that is iteratable
    // items: iteratable
    // predicate: function that returns truthy or falsy value when invoked on an item in items
    let filter = function*(items, predicate) {
      for(let item of items) {
        if (predicate(item)) {
          yield item;
        }
      }
    };

    // items: iteratable
    // number: maximum number of items to yield
    let take = function*(items, number) {
      let count = 0;
      if (number < 1) {
        // Yes you can have a return statement in generator function.
        // When hit, iterator that this generator creates will set the done flag to true.
        return;
      }
      for(let item of items) {
        yield item;
        count += 1;
        if (count >= number) {
          return;
        }
      }
    };

    let company = new Company();
    company.addEmployees('Tim', 'Sue', 'John', 'Tom');

    let count = 0;

    for(let employee of take(filter(company, e => e[0] === 'T'), 1)) {
      expect(employee).toBeDefined();
      count += 1;
    }

    expect(count).toEqual(1);
  });

  it('Can take a parameter from next(param)', () => {

    // Generator function that will yield the values between start and end inclusive
    let range = function*(start, end) {
      let current = start;
      while (current <= end) {
        // this works because caller did: iterator.next(2), therefore delta = 2
        let delta = yield current;
        current += delta || 1 ;
      }
    };

    let result = [];
    let iterator = range(1, 10);
    let next = iterator.next();
    while(!next.done) {
      result.push(next.value);
      // can pass a parameter into next
      // value passed in can influence the state of the generator
      next = iterator.next(2);
    }

    expect(result).toEqual([1, 3, 5, 7, 9]);
  });

});
