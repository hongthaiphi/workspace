module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            javascript: {
                scr: 'src/**/*.js',
                dest: 'build/sripts.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTaskk('default', ['concat']);
}