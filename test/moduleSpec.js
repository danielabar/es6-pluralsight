import {Employee, empLogger, defaultRaise, modelEmployee} from '../src/employee';

describe('ES6 Module', () => {

  it('exports a class', () => {
    var e = new Employee('Joe');
    expect(e.doWork()).toEqual('Joe is working');
  });

  it('exports a function', () => {
    let e = new Employee('Alice');
    expect(typeof empLogger).toEqual('function');
    expect(empLogger(e)).toBe(true);
  });

  it('exports a primitive', () => {
    expect(defaultRaise).toEqual(0.03);
  });

  it('exports an object', () => {
    expect(modelEmployee.name).toEqual('Allen');
  });

});
