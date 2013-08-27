'use strict';

var tape = require('tape');

module.exports = function(opts) {
  return function(name, fun) {

    if (opts.setup) {
      tape('setup', function(t) {
        t.plan(0);
        opts.setup(t.end.bind(this));
      });
    }

    tape(name, fun);

    if (opts.teardown) {
      tape('teardown', function(t) {
        t.plan(0);
        opts.teardown(t.end.bind(this));
      });
    }

  };
};