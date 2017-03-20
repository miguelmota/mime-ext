const fs = require('fs');
const path = require('path');

const getMimeTypes = require('./getMimeTypes');
const normalize = require('./normalize');

getMimeTypes()
.then(data => {
  fs.writeFileSync(path.resolve(__dirname, 'mime_types.txt'), data);
  return Promise.resolve(data);
})
.then(data => {
  const table = normalize(data);
  return Promise.resolve(table);
})
.then(table => {
  fs.writeFileSync(path.resolve(__dirname, 'mime_ext.json'), JSON.stringify(table, null, 2));
  return Promise.resolve();
})
.catch(error => {
  console.error(error);
})
.then(() => {
  console.log('complete');
});
