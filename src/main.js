import { createPromise, passData } from 'src/async';

export function foo() {
  let x = 'hello es6';
  console.log(x);
}

foo();

createPromise();
passData();
