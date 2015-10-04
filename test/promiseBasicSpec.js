/*eslint no-unused-vars:0*/
describe('Promises Basic', () => {

  it('Executes the callback given to then', done => {
    var promise = new Promise( (resolve, reject) => {
      resolve();
    });

    promise.then(function() {
      done();
    });
  });

  it('Receives the resolved data', done => {
    var promise = new Promise( (resolve, reject) => {
      resolve(42);
    });

    promise.then( data => {
      expect(data).toEqual(42);
      done();
    });
  });

  it('Fails when rejected', done => {
    var promise = new Promise( (resolve, reject) => {
      reject(Error('oh noes!'));
    });
    promise.then( () => {
      fail('promise should have been rejected');
    }, (err) => {
      expect(err.message).toEqual('oh noes!');
      done();
    });
  });

  it('Executes catch block when rejected', done => {
    var promise = new Promise( (resolve, reject) => {
      reject(Error('oh noes!'));
    });
    promise.catch( err => {
      expect(err.message).toEqual('oh noes!');
      done();
    });
  });

  it('Composes when resolved with a promise', done => {
    var previousPromise = new Promise( (resolve, reject) => {
      resolve(3);
    });

    var promise = new Promise( (resolve, reject) => {
      resolve(previousPromise);
    });

    promise.then( data => {
      expect(data).toEqual(3);
      done();
    });
  });

  it('Has a static resolve', done => {
    var previousPromise = Promise.resolve(3);
    var promise = Promise.resolve(previousPromise);

    promise.then( data => {
      expect(data).toEqual(3);
      done();
    });
  });

  it('Has a static reject', done => {
    var promise = Promise.reject(Error('oh noes!'));
    promise.catch( err => {
      expect(err.message).toEqual('oh noes!');
      done();
    });
  });

  it('Callbacks given to promises are executed asynchronously, even when resolved immediately', done => {
    var async = false;
    var promise = new Promise( (resolve, reject) => {
      resolve();
    });

    promise.then( () => {
      // This callback runs asynchronously, i.e. placed on call stack,
      // therefore will run AFTER the line below that sets async to true.
      expect(async).toBe(true);
      done();
    });

    async = true;
  });

});
