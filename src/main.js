import 'zloirock/core-js';
import { createPromise, passData } from 'src/async';

export function foo() {
  let x = 'hello es6';
  console.log(x);
}

foo();

createPromise();
passData();

describe('Promises', () => {

  it('Does something', () => {
    expect(true).toBe(true);
  });

});
