module.exports = function(grunt) {

    var _ = grunt.util._,
        path = require('path');

    require("time-grunt")(grunt);
    // Loads task options from the grunt folder and loads tasks defined in `package.json`
    var config = _.extend({},
        require('load-grunt-config')(grunt, {
            jitGrunt: true, //https://github.com/shootaroo/jit-grunt
            //configPath: path.join(process.cwd(), 'grunt'),
            //loadGruntTasks: true,
            init: true //auto grunt.initConfig
        })
    );

    // Grunt main custom tasks...
    grunt.registerTask('build', [
        'clean',
        'copy',
        'browserify',
        'connect:server',
        'open',
        'watch'
    ]);

};