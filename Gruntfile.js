
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'clean': ["build"],
        //'browserify': {
        //    dist: {
        //        //files: {
        //        //    'build/src/app.js': ['src/scripts/a.js', 'src/scripts/b.js']
        //        //}
        //        options: {
        //            plugin: [
        //                'partition-bundle',[
        //                    {
        //                        map: {
        //                            "app.js": [
        //                                "src/scripts/a",
        //                                "src/scripts/b"
        //                            ],
        //                            "late.js": ["src/scripts/c", "src/scripts/d"]
        //                        },
        //                        output: 'build/src/'
        //                    }
        //                ]
        //            ]
        //        }
        //    }
        //},
        'copy': {
            dist: {
                files: [
                    { expand: true, src: ['src/assets/**'], dest: 'build/' },
                    { expand: true, flatten: true, src: ['node_modules/phaser/build/*.js'], dest: 'build/src/js/' },
                    { expand: true, src: ['src/css/**'], dest: 'build/' },
                    { expand: true, src: ['src/index.html'], dest: 'build/' }
                ]
            }
        },
        'browserify': {
            build: {
                src: ['src/game/main.js'],
                dest: 'build/src/js/game.js'
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

    grunt.registerTask('build', ['clean', 'copy']);
    grunt.registerTask('server', ['http-server']);
};