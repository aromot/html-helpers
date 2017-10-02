var assert = require('assert');

describe('HTML Helpers', function() {
    describe('#strong', function() {
        it('should return <strong>my text</strong>', function() {
            var hh = require('../index');
            assert.equal("<strong>my text</strong>", hh.strong('my text'));
        });
    });
});