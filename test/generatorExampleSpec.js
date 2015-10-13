import {Company} from '../src/generatorExample';

describe('Generator Example', () => {

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
        console.log('take', item);
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

    for(let employee of take(filter(company, e => e[0] === 'T')), 1) {
      expect(employee).toBeDefined();
      count += 1;
    }

    expect(count).toEqual(1);

  });

});
