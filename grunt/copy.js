module.exports = function(grunt) {
    return {
        app: {
            files: [
                {expand: true, src: ['app/index.html'], dest: 'dist/', flatten: true}
            ]
        }
    }
};