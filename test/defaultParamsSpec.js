/*eslint no-unused-vars:0*/
describe('Default Parameter Values', () => {
  'use strict';

  let doWork = function(name='Scott') {
    return `Hello ${name}`;
  };

  it('Provides defaults', () => {
    let result = doWork();
    expect(result).toEqual('Hello Scott');
  });

  it('Uses specified value', () => {
    let result = doWork('Jane');
    expect(result).toEqual('Hello Jane');
  });

  it('Does not apply to a falsy value of empty string', () => {
    let result = doWork('');
    expect(result).toEqual('Hello ');
  });

  it('Does not apply to a falsy value of null', () => {
    let result = doWork(null);
    expect(result).toEqual('Hello null');
  });

  it('Will provide a value for undefined', () => {
    let someWork = function(a = 1, b = 2, c = 3) {
      return [a, b, c];
    };

    // destructured array assignment
    let [a, b, c] = someWork(5, undefined);

    expect(a).toEqual(5);
    expect(b).toEqual(2);
    expect(c).toEqual(3);
  });

  it('Works with destructuring', () => {
    let someWork = function(url, {data = 'Scott', cache = true}) {
      return data;
    };

    let result = someWork( 'api/test', { cache: false } );

    expect(result).toEqual('Scott');
  });

});
