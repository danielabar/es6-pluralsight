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

});
