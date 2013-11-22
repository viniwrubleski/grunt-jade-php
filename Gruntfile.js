'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        clean: {
            test: [ 'tmp' ]
        },

        jadephp: {
            combine: {
                files: {
                    'tmp/combine.phtml': [ 'test/fixtures/combine_one.jade', 'test/fixtures/combine_two.jade' ]
                }
            },

            empty: {
                files: {
                    'tmp/idontexist.phtml': [ 'test/fixtures/idontexist.jade' ]
                }
            },

            prettify: {
                options: {
                    pretty: true
                },
                files: {
                    'tmp/pretty.phtml': [ 'test/fixtures/pretty.jade' ]
                }
            }
        },

        nodeunit: {
            tests: ['test/*_test.js']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-internal');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'jadephp', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);

};
