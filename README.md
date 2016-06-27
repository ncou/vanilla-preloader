# Vanilla Preloader

Simple Vanilla JavaScript to help you preload your images.

## Installation

### NPM

```bash
npm install vanilla-preloader --save
```

### Bower

```bash
bower install vanilla-preloader --save
```

### Old School

[Download the zip file](https://github.com/benjamincrozat/images-loader/archive/master.zip).

## Usage

### Browserify + ES2015

```javascript
import VanillaPreloader from 'vanilla-preloader'

new VanillaPreloader([
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
], function (images) {
    console.log('Every image is now loaded!')
})
```

### Browserify + ES5

```javascript
var VanillaPreloader = require('vanilla-preloader');

new VanillaPreloader([
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
], function (images) {
    console.log('Every image is now loaded!');
});
```

### Old School

```javascript
new VanillaPreloader([
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
    'https://example.com/path/to/image.jpg',
], function (images) {
    console.log('Every image is now loaded!');
});
```

## License

[WTFPL](http://www.wtfpl.net/about)
