# node-dcg

[Discounted cumulative gain (DCG)](https://en.wikipedia.org/wiki/Discounted_cumulative_gain) calculator.

## Installation

npm:

```bash
$ npm install node-dcg
```

## Usage

```javascript
var dcg = require('node-dcg');

var value = dcg.ndcg([3, 0, 1, 2]);
console.log(value);
```
