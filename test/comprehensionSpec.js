import {SampleCompany} from '../src/SampleCompany.js';

describe('Comprehensions', () => {

  it('Array comprehension', () => {

    let myFilter = function*(items, predicate) {
      // Note that array comprehension returns an Array, not an individual item in the array
      // However, adding * to yield flattens the results, and causes each individual item in array to be yielded
      // Also note array comprehension is GREEDY, it will iterate over ENTIRE source collection
      yield* [for (item of items) if(predicate(item)) item];
    };

    let myTake = function*(items, number) {
      let count = 0;
      if (number < 1) {
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

    let company = new SampleCompany();
    company.addEmployees('Tim', 'Sue', 'John', 'Tom');

    let count = 0;
    let found = undefined;

    for(let employee of myTake(myFilter(company, e => e[0] === 'S'), 1)) {
      found = employee;
      count += 1;
    }

    expect(count).toEqual(1);
    expect(found).toEqual('Sue');
  });

  it('Generator comprehension', () => {

    // Generator comprehension is LAZY, will only yield as many company employees as needed
    let myFilter = function*(items, predicate) {
      yield* (for (item of items) if(predicate(item)) item);
    };

    let myTake = function*(items, number) {
      let count = 0;
      if (number < 1) {
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

    let company = new SampleCompany();
    company.addEmployees('Tim', 'Sue', 'John', 'Tom');

    let count = 0;
    let found = undefined;

    for(let employee of myTake(myFilter(company, e => e[0] === 'S'), 1)) {
      found = employee;
      count += 1;
    }

    expect(count).toEqual(1);
    expect(found).toEqual('Sue');
  });

});
