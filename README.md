# wrapping-tape

Wrap [tape](https://github.com/substack/tape) tests to add setup and teardown functionality

The functions passed into setup and teardown run as normal tape tests, you can call asserts and use `t.end()` to finish them, they can work asynchronously.

## Example

```` js
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

```` js
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

## Install
```
$ npm install wrapping-tape
```
