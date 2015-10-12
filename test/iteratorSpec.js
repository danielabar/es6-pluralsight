/*eslint no-unused-vars:0*/
describe('Iterable', () => {
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

  it('Built by implementing Symbol.iterator', () => {
    class Company {
      constructor() {
        this.employees = [];
      }

      addEmployees(...names) {
        this.employees = this.employees.concat(names);
      }

      // clients of Company can iterate employees without having a reference to employees array
      [Symbol.iterator]() {
        return new ArrayIterator(this.employees);
      }
    }

    // this is re-usable for any class that requires an iterator
    class ArrayIterator {
      constructor(array) {
        this.array = array;
        this.index = 0;
      }

      next() {
        var result = {
          value: undefined,
          done: true
        };
        if (this.index < this.array.length) {
          this.index += 1;
          result.value = this.array[this.index];
          result.done = false;
        }
        return result;
      }
    }

    let count = 0;
    let company = new Company();
    company.addEmployees('Tim', 'Sue', 'John', 'Scott');

    for(let employee of company) {
      count += 1;
    }

    expect(count).toEqual(4);
  });

});
