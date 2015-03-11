var mapping = require('./src/game/mapping');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'clean': ["build"],
        'copy': {
            dist: {
                files: [{
                    expand: true,
                    src: ['src/assets/**'],
                    dest: 'build/'
                }, {
                    expand: true,
                    flatten: true,
                    src: ['node_modules/phaser/build/*.js'],
                    dest: 'build/src/js/'
                }, {
                    expand: true,
                    src: ['src/css/**'],
                    dest: 'build/'
                }, {
                    expand: true,
                    src: ['src/index.html'],
                    dest: 'build/'
                }]
            }
        },
        browserify: {
            dist: {
                files: {
                    ".tmp/game.js": ["src/game/main.js"]
                }
            },
            options: {
                plugin: [
                    ['partition-bundle', {
                        map: mapping,
                        output: 'build/src'
                    }]
                ]
            }
        },

        'http-server': {
            'dev': {
                root: 'build/src/',
                port: 8282,
                host: "localhost",
                ext: "html"
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('build', ['clean', 'copy', 'browserify']);
    grunt.registerTask('server', ['http-server']);
};