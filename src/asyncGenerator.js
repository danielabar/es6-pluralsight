export let naivePause = function(delay, cb) {
  setTimeout(() => {
    let message = `paused for ${delay} ms`;
    cb(message);
  }, delay);
};

let sequence;
let run = function(generator) {
  sequence = generator();
  sequence.next();
};

let resume = function() {
  sequence.next();
};

export let async = {
  run: run,
  resume: resume
};

export let betterPause = function(delay) {
  setTimeout(() => {
    console.log(`=== better pause for ${delay} ms ===`);
    async.resume();
  }, delay);
};
