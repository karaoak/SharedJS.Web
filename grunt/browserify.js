var remapify = require('remapify');

module.exports = function(grunt) {

    return {
        options: {
            preBundleCB: function (b) {
                b.plugin(remapify, [{
                    cwd: "app/src",
                    src: './**/*.js',
                    expose: ''
                }]);
            }
        },
        js: {
            files: {
                'dist/js/bundle.js': ['app/src/core/**/*.js', 'app/src/app.js']
            }
        }
    };
};