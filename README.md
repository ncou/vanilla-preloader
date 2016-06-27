# [Images Preloader](https://canevas.benjamincrozat.com)

Simple Vanilla JavaScript to help you preload your images.

## Installation

### NPM

```bash
npm install images-preloader --save
```

### Old School

[Download the zip file](https://github.com/benjamincrozat/images-loader/archive/master.zip).

## Usage

### Browserify + ES2015

```javascript
import ImagesPreloader from 'images-preloader'

new ImagesPreloader([
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
var ImagesPreloader = require('images-preloader');

new ImagesPreloader([
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
new ImagesPreloader([
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
