import {SampleCompany} from '../src/SampleCompany.js';

describe('Comprehensions', () => {

  it('does something', () => {

    let myFilter = function*(items, predicate) {
      for(let item of items) {
        if (predicate(item)) {
          yield item;
        }
      }
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
