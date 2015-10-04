// Karma configuration
// Generated on Sun Oct 04 2015 07:22:31 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // Plugins to load
    plugins: [
      'karma-babel-preprocessor',
      'karma-systemjs',
      'karma-jasmine',
      'karma-chrome-launcher'
    ],


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['systemjs', 'jasmine'],


    // https://github.com/rolaveric/karma-systemjs
    systemjs: {
      // Path to your SystemJS configuration file
      configFile: 'config.js',

      // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
      serveFiles: [ ],

      // SystemJS configuration specifically for tests, added after your config file.
      // Good for adding test libraries and mock modules
      config: {
        // paths: {
        //   'angular-mocks': 'bower_components/angular-mocks/angular-mocks.js'
        // }
      }
    },


    // list of files / patterns to load in the browser
    files: [
      'src/*.js',
      'src/**/*.js',
      'test/*Spec.js',
      'test/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['babel'],
      'test/**/*Spec.js': ['babel']
    },


    // babelPreprocessor: {
    //   options: {
    //     sourceMap: 'inline'
    //   }
    // },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
