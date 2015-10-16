'use strict';

var gulp = require('gulp');
var karma = require('karma').server;

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    browsers: ['Firefox']
  }, function() {
    done();
  });
});
