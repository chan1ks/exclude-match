'use strict';

require('mocha');
var assert = require('chai').assert;
var exclude = require('../');

describe('exclude-match', function () {
    it('should throw an error when first argument is not a number, string or array', function (done) {
        try {
            exclude();
            done(new Error('expected error'))
        } catch (e) {
            assert.equal(e.message, 'exclude-match uses an array as the first argument');
            done();
        }
    });

    it('should throw an error when second argument is null', function (done) {
        try {
            exclude([1, 2, 3, 4, 5], null);
            done(new Error('expected error'))
        } catch (e) {
            assert.equal(e.message, 'exclude-match uses a number, string, or array as the second argument');
            done();
        }
    });

    it('should throw an error when second argument is an object', function (done) {
        try {
            exclude([1, 2, 3, 4, 5], {});
            done(new Error('expected error'))
        } catch (e) {
            assert.equal(e.message, 'exclude-match uses a number, string, or array as the second argument');
            done();
        }
    });

    it('should throw an error when second argument is undefined', function (done) {
        try {
            exclude([1, 2, 3, 4, 5], '');
            done(new Error('expected error'))
        } catch (e) {
            assert.equal(e.message, 'exclude-match uses a number, string, or array as the second argument');
            done();
        }
    });

    it('should throw an error when second argument is undefined', function (done) {
        try {
            exclude([1, 2, 3, 4, 5], []);
            done(new Error('expected error'))
        } catch (e) {
            assert.equal(e.message, 'exclude-match uses a number, string, or array as the second argument');
            done();
        }
    });

    it('should match a non-glob string pattern and remove it', function () {
        var actual = exclude(['a', 'b', 'c'], 'a');
        assert(actual);
        assert.deepEqual(actual, ['b', 'c']);
    });

    it('should match an array of non-glob string patterns and remove them', function () {
        var actual = exclude(['a', 'b', 'c'], ['a', 'b']);
        assert(actual);
        assert.deepEqual(actual, ['c']);
    });

    it('should match a string glob pattern and remove them', function () {
        var actual = exclude(['a.txt', 'b.json', 'c.js'], '*.js');
        assert(actual);
        assert.deepEqual(actual, ['a.txt', 'b.json']);

        actual = exclude(['a.txt', 'b.json', 'c.js'], '*.{txt,js}');
        assert(actual);
        assert.deepEqual(actual, ['b.json']);
    });

    it('should match an array of glob patterns and remove them', function () {
        var actual = exclude(['a.txt', 'b.json', 'c.js'], ['*.js']);
        assert(actual);
        assert.deepEqual(actual, ['a.txt', 'b.json']);

        actual = exclude(['a.txt', 'b.json', 'c.js'], ['*.js', 'b*']);
        assert(actual);
        assert.deepEqual(actual, ['a.txt']);
    });

    it('should match a non-glob number and remove it', function () {
        var actual = exclude([1, 2, 3, 4, 5], 1);
        assert(actual);
        assert.deepEqual(actual, [2, 3, 4, 5]);
    });

    it('should match an array of non-glob numbers and remove them', function () {
        var actual = exclude([1, 2, 3, 4, 5], [1, 2, 3]);
        assert(actual);
        assert.deepEqual(actual, [4, 5]);
    });
});