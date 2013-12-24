module.exports = function(grunt) {

    var libs = [
        'bower_components/jquery/jquery.js',
        'bower_components/underscore/underscore.js',
        'bower_components/backbone/backbone.js'
    ]

    var app = [
        'app/js/router.js',
        'app/js/models/address.js',
        'app/js/collections/addressBook.js',
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
            "app/build/js",
            "app/build/css"
        ],

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
                    'app/build/js/libs.js': libs,
                    'app/build/js/app.js': app
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
        },
    });

    // Load plugins here
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Define your tasks here
    grunt.registerTask('default', ['clean', 'concat']);
    grunt.registerTask('production', ['clean', 'uglify']);
};