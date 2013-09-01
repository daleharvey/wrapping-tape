/*globals require module */

'use strict';

var tape = require('tape');

module.exports = function(opts) {
  return function(name, expect, fun) {

    // Users can optionally specify the number of assertions expected
    // when they define the test
    if (!fun) {
      fun = expect;
      expect = null;
    }

    if (opts.setup) {
      tape('setup', function(t) {
        opts.setup.call(t, t);
      });
    }

    tape(name, function(t) {
      if (expect !== null) {
        t.plan(expect);
      }
      fun.call(t, t);
    });

    if (opts.teardown) {
      tape('teardown', function(t) {
        opts.teardown.call(t, t);
      });
    }

  };
};