'use strict';

/* eslint-env mocha */

/*
 * Dependencies.
 */

var trimTrailingLines = require('./');
var assert = require('assert');

/*
 * Tests.
 */

describe('trimTrailingLines(value)', function () {
    it('should coerce to string', function () {
        assert.equal(trimTrailingLines(true), 'true');
    });

    it('should work', function () {
        assert.equal(trimTrailingLines(''), '');
        assert.equal(trimTrailingLines('foo'), 'foo');
        assert.equal(trimTrailingLines('foo\nbar'), 'foo\nbar');
        assert.equal(trimTrailingLines('foo\nbar\n'), 'foo\nbar');
        assert.equal(trimTrailingLines('foo\nbar\n\n'), 'foo\nbar');
    });
});
