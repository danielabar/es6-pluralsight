describe('Promises', () => {

  it('Executes the callback given to then', (done) => {
    var promise = new Promise(function(resolve, reject) {
      console.dir(reject);
      resolve();
    });

    promise.then(function() {
      done();
    });
  });

  it('Receives the resolved data', (done) => {
    var promise = new Promise(function(resolve, reject) {
      console.dir(reject);
      resolve(42);
    });

    promise.then(function(data) {
      expect(data).toEqual(42);
      done();
    });
  });

});
