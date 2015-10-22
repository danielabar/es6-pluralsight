import {Employee, empLogger, defaultRaise, modelEmployee} from '../src/employee';
import factory from '../src/defaultEmployee';

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

  it('exports a default class', () => {
    var e = new factory('Jane');
    expect(e.doWork()).toEqual('Jane is working');
  });

  it('use of symbol prevents direct modification of properties', () => {
    var e = new Employee('Tom');
    e._name = 'Fred';
    expect(e.name).toEqual('Tom');
  });

});
