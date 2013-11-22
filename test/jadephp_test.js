'use strict';

var grunt = require('grunt');

exports.jadephp = {
    combine: function (test) {
        test.expect(1);

        var expect = grunt.file.read('test/expected/combine.phtml');
        var result = grunt.file.read('tmp/combine.phtml');
        test.equal(expect, result, 'should concat and compile an array of jade files in order using jade-php');

        test.done();
    },
    empty: function (test) {
        test.expect(1);

        test.ok(!grunt.file.exists('tmp/idontexist.phtml'), 'Empty compiled file should not exist');

        test.done();
    },
    pretify: function (test) {
        test.expect(1);

        var expect = grunt.file.read('test/expected/pretty.phtml');
        var result = grunt.file.read('tmp/pretty.phtml');
        test.equal(expect, result, 'should concat and compile prettifyed HTML');

        test.done();
    }
};
