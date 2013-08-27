# wrapping-tape

Wrap [tape](https://github.com/substack/tape) tests to add setup and teardown functionality

## Example

```` js
var tape = require('wrapping-tape');

var test = tape({
  setup: function(done) {
    ... do test setup
    done();
  },
  teardown: function(done) {
    ... do test teardown
    done();
  }
});
````

or

```` js
var test = require('wrapping-tape')({
  setup: function(done) {
    ... do test setup
  },
  teardown: function(done) {
    ... do test teardown
  }
});
```

## Install
```
$ npm install wrapping-tape
```
