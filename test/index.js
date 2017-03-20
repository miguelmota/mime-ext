const test = require('tape');
const mimeExt = require('../index');

test('test', (t) => {
  t.plan(9);

  t.deepEqual(mimeExt(), []);
  t.deepEqual(mimeExt('asdfowref'), []);
  t.deepEqual(mimeExt('non-existent'), []);
  t.deepEqual(mimeExt({junk: 'asdfowref'}), []);
  t.deepEqual(mimeExt('text/plain')[0], 'txt');
  t.deepEqual(mimeExt('image/jpeg'), ['jpg', 'jpeg', 'jpe']);
  t.deepEqual(mimeExt('text/html'), ['html', 'htm']);
  t.deepEqual(mimeExt('application/javascript'), ['js']);
  t.deepEqual(mimeExt('application/vnd.ms-excel'), ['xlw', 'xlt', 'xls', 'xlm', 'xlc', 'xla']);
});
