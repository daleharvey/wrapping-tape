# wrapping-tape

Wrap [tape](https://github.com/substack/tape) tests to add setup, teardown and some syntax sugar to test definitions.

The functions passed into setup and teardown run as normal tape tests, you can call asserts and use `t.end()` to finish them, they can work asynchronously.

You can also optionally specify the number of assertions expected when executing tests.

## Example Setup / Teardown

``` js
var tape = require('wrapping-tape');

var test = tape({
  setup: function(t) {
    ... do test setup
    t.end();
  },
  teardown: function(t) {
    ... do test teardown
    t.end();
  }
});
````

or

``` js
var test = require('wrapping-tape')({
  setup: function(t) {
    ... do test setup
    t.end();
  },
  teardown: function(t) {
    ... do test teardown
    t.end();
  }
});
```
## Example Test Plan

``` js
var test = require('wrapping-tape')();

test('A test', 1, function(t) {
  t.ok(true, 'Only 1 assertion expected');
});
```

## Install
```
$ npm install wrapping-tape
```
