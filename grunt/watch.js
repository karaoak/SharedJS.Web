
module.exports = function(grunt) {
    return {
        options: {
            livereload: 3001
        },
        scripts: {
            files: 'app/**',
            tasks: ['clean', 'copy', 'browserify']
        }
    }
};