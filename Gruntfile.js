module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                files: {
                    'build/src/app.js': ['src/scripts/*.js']
                }
            }
        },
        copy: {
            all: {
                // This copies all the html and css into the dist/ folder
                expand: true,
                src: ['src/*.html', 'src/*.css'],
                dest: 'build/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['browserify', 'copy']);
};