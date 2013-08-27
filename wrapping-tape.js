'use strict';

var tape = require('tape');

module.exports = function(opts) {
  return function(name, fun) {

    if (opts.setup) {
      tape('setup', function(t) {
        opts.setup.call(t, t);
      });
    }

    tape(name, fun);

    if (opts.teardown) {
      tape('teardown', function(t) {
        opts.teardown.call(t, t);
      });
    }

  };
};