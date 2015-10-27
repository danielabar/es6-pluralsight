import {naivePause, betterPause, async} from 'src/asyncGenerator';

describe('async generators', () => {

  it('is awkward to write with regular async', (done) => {
    let result = 'START ';
    naivePause(500, (message) => {
      result += message;
      result += ' MIDDLE ';
      naivePause(500, (message) => {
        result += message;
        result += ' END';
        expect(result).toEqual('START paused for 500 ms MIDDLE paused for 500 ms END');
        done();
      });
    });
  });

  it('is easier to read with generators', (done) => {
    // define a generator function for how we want the code to look - linear
    function* main() {
      console.log('start');
      yield betterPause(500);
      console.log('middle');
      yield betterPause(500);
      console.log('end');

      done();
    }

    async.run(main);

  });

});
