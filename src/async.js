'use strict';

/*eslint no-unused-vars:0*/

export function createPromise() {

  // Promise constructor takes in a single function argument,
  // which has two parameters: resolve and reject, which are themselves functions
  var promise = new Promise(function(resolve, reject) {
    // console.dir(reject);
    resolve();
  });

  promise.then(function() {
    // console.log('its a promise!');
  });
}

export function passData() {
  var promise = new Promise(function(resolve, reject) {
    // console.dir(reject);
    resolve(1);
  });

  promise.then(function(data) {
    // console.log(`promise returned ${data}`);
  });
}
