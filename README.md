# mime-ext

> filename extensions for mime type

## Install

```bash
npm install mime-ext
```

## Usage

```javascript
const mimeExt = require('mime-ext');

console.log(mimeExt('text/html')); // ['html', 'htm']
console.log(mimeExt('image/jpeg')); // ['jpg', 'jpeg', 'jpe']
console.log(mimeExt('application/javascript')); // ['js']
console.log(mimeExt('application/vnd.ms-excel')); // ['xlw', 'xlt', 'xls', 'xlm', 'xlc', 'xla']
console.log(mimeExt('none-existent')); // []

```

## Test

```bash
npm test
```

## Resources

Use [`ext-mime`](https://github.com/miguelmota/ext-mime) for finding mime types for filename extension.

# License

MIT
