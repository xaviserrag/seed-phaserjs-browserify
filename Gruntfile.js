
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'clean': ["build"],
        'partition': {
            dist: {
                //files: {
                //    'build/src/app.js': ['src/scripts/a.js', 'src/scripts/b.js']
                //}
            },
            options: {
                postBundleCB: function (b) {
                    b.plugin('partition-bundle', [
                        {
                            map: {
                                "app.js": [
                                    "src/scripts/a",
                                    "src/scripts/b"
                                ],
                                "late.js": ["src/scripts/c", "src/scripts/d"]
                            },
                            output: 'build/src'
                        }
                    ]);
                }
            }
        },
        'copy': {
            all: {
                // This copies all the html and css into the dist/ folder
                expand: true,
                src: ['src/*.html', 'src/*.css'],
                dest: 'build/'
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

    grunt.registerTask('default', ['clean', 'browserify', 'copy', 'http-server']);
};