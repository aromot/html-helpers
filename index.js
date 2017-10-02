var tables = require('./helpers/tables');

module.exports = {
    /**
     * Generate a strong text.
     * @param str text
     * @returns {string}
     */
    strong: function(str) {
        return '<strong>' + str  +'</strong>';
    },
    table: function() {
        var args = Array.prototype.slice.call(arguments);
        return tables.apply(null, args);
    }
};