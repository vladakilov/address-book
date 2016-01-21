module.exports = function(grunt) {

    var libs = [
        'app/bower_components/jquery/jquery.js',
        'app/bower_components/underscore/underscore.js',
        'app/bower_components/backbone/backbone.js'
    ]

    var app = [
        'app/js/router.js',
        'app/js/models/address.js',
        'app/js/collections/addressBook.js',
        'app/js/templates/address.js',
        'app/js/views/addressIndex.js',
        'app/js/views/addressShow.js',
        'app/js/views/addressRow.js',
        'app/js/views/addressCreate.js',
        'app/js/views/addressEdit.js',
        'app/js/app.js'
    ]

    // Configuration goes here
    grunt.initConfig({

        clean: [
            "app/build"
        ],

        connect: {
            dev: {
                options: {
                    keepalive: true,
                    base: 'app',
                    port: 9001
                }
            },
            production: {
                options: {
                    keepalive: true,
                    base: 'app',
                    port: 9002
                }
            }
        },

        concat: {
            basic_and_extras: {
                files: {
                    'app/build/js/libs.js': libs,
                    'app/build/js/app.js': app
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'app/dist/js/app.js': app
                }
            }
        },

        browserify: {
            dist: {
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                    transform: [
                        ["babelify", {
                            presets: ["es2015"]
                        }]
                    ]
                },
                files: {
                    "app/dist/app.js": ["app/js/app.js"]
                }
            }
        },

        watch: {
            scripts: {
                files: ['app/js/*.js'],
                tasks: ['default'],
                options: {
                    spawn: false,
                },
            },
        }

    });

    // Load plugins here
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');

    // Define your tasks here
    grunt.registerTask('default', [
        'clean',
        'concat'
    ]);

    grunt.registerTask('babel', [
        'browserify'
    ]);

    grunt.registerTask('production', [
        'clean',
        'concat',
        'uglify'
    ]);

    grunt.registerTask('serve-dev', [
        'default',
        'connect:dev'
    ]);

    grunt.registerTask('serve-production', [
        'production',
        'connect:production'
    ]);
};