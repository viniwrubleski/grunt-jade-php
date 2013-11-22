# grunt-jade-php v0.1.0

> grunt-jade-php



## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jade-php --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jade-php');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-cssmin/tree/grunt-0.3-stable).*



## Jadephp task
_Run this task with the `grunt jadephp` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

Files are compressed with [jade-php](https://github.com/viniwrubleski/jade-php).

### Options

#### pretty

Type: `Boolean`
Default: `false`

Adds whitespace to the resulting html to make it easier for a human to read.

### Usage Examples

#### Combine two files into one output file

```js
jadephp: {
  combine: {
    files: {
      'path/to/output.phtml': ['path/to/input_one.jade', 'path/to/input_two.jade']
    }
  }
}
```

#### Prettify
```js
jadephp: {
  prettify: {
    options: {
      pretty: true
    },
    files: {
      'path/to/output.phtml': ['path/to/**/*.jade']
    }
  }
}
```

#### Compile all contents of a release directory and add a `.phtml` extension
```js
jadephp: {
  compile: {
    expand: true,
    cwd: 'release/jade/',
    src: ['*.jade'],
    dest: 'release/phtml/',
    ext: '.phtml'
  }
}
```


## Release History

_(Nothing yet)_


---

Task submitted by [Vinicius Wrubleski](http://www.wrubleski.com.br/)

*This file was generated on Fri Nov 22 2013 19:34:30.*
