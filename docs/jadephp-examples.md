# Usage Examples

## Combine two files into one output file

```js
jadephp: {
  combine: {
    files: {
      'path/to/output.phtml': ['path/to/input_one.jade', 'path/to/input_two.jade']
    }
  }
}
```

## Prettify
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

## Compile all contents of a release directory and add a `.phtml` extension
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
