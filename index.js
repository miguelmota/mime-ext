const mimes = require('./src/data/mime_ext.json')

function mimeExt(mime) {
  if (typeof mime !== 'string') {
    try {
      mime = mime.toString();
    } catch(error) {
      return [];
    }
  }

  return mimes[mime] || [];
}

module.exports = mimeExt;