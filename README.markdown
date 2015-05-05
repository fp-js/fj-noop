# fj-noop

[![Build Status](https://travis-ci.org/fp-js/fj-noop.svg)](https://travis-ci.org/fp-js/fj-noop) [![npm version](https://badge.fury.io/js/fj-noop.svg)](http://badge.fury.io/js/fj-noop)
> noop

## Installation

`npm install fj-noop --save`

## Usage

```js
const noop = require('fj-noop');

window.console = {
    log: noop,
    error: noop,
    warn: noop,
    table: noop
};
```
