'use strict';

module.exports = function (grunt) {

    grunt.registerMultiTask('jadephp', 'Convert jade templates to PHP', function() {
        var options = this.options({
            pretty: false
        });

        this.files.forEach(function (f) {
            var valid = f.src.filter(function (filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            });

            var php = valid.map(function (f) {
                return jadePHP(grunt.file.read(f), options);
            }).join('');

            if (php.length < 1) {
                grunt.log.warn('Destination not written because PHP file was empty.');
            } else {
                grunt.file.write(f.dest, php);
                grunt.log.writeln('File ' + f.dest + ' created.');
            }
        });
    });

    var jade = require('jade');
    require('jade-php')(jade);
    var jadePHP = function (source, options) {
        try {
            return jade.render(source, options);
        } catch (e) {
            grunt.log.error(e);
            grunt.fail.warn('jade php failed.');
        }
    };

};
