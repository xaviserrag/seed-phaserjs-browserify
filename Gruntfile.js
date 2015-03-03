module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                files: {
                    'build/app.js': ['src/scripts/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
};