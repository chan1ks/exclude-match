# exclude-match

> Exclude items in an array matching a given pattern.

## Install with [npm](npmjs.org):

```sh
$ npm install --save exclude-match
```

## Usage

```js
var exclude = require('exclude-match');
exclude(array, patternOrPatterns [, micromatchOptions]);

// match single strings...
var array1 = exclude(['a', 'b', 'c'], 'a');

// or array of strings
var array2 = exclude(['a', 'b', 'c'], ['a', 'b']);

// match globs, and ignore case...
var array3 = exclude(['a', 'b', 'c'], '*.txt', {nocase: true});

// or array of globs
var array3 = exclude(['a.txt', 'b.json', 'c.js'], ['*.{js,json}', '!*.txt']);

// works with numbers too...
var array3 = exclude([1, 2, 3, 4, 5], 4);

// and glob matches...
var array3 = exclude([1, 2, 3, 4, 5], '{1...4}');

// and even an array of globs
var array3 = exclude([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['{1...4}', !{2..3}]);
```

* `array` **{Array}**: Array to remove a matched item(s) from.
* `pattern` **{Number|String|Array}**: Glob pattern(s) to match against.
* `options.nocase` **{Boolean}**: Set this to `true` force case-insensitive filename checks. This is useful on case sensitive file systems.
* `returns` **{Array}**: Returns the resolved array with removed matches if they exist, otherwise returns the original array.

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Contributing

Take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

For bugs or feature requests, [please create an issue](https://github.com/chan1ks/exclude/issues).

## Release History

2013-03-08 - v1.0.0 - Updated README.md.
2012-11-15 - v0.2.0 - Updated dependencies. Reinforced type-checks.
2012-11-01 - v0.1.0 - Initial release.

## Author
 
+ [github/chan1ks](https://github.com/chan1ks)
+ [twitter/chan1ks](http://twitter.com/chan1ks)

## License

Copyright © 2016, ["Captain" Morgan Worrell](https://github.com/chan1ks).
Released under the [MIT license](https://github.com/chan1ks/exclude-match/blob/master/LICENSE).

[micromatch]: http://github.com/jonschlinkert/micromatch