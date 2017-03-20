const exec = require('child_process').exec;
const cmd = `wget -qO- http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types | egrep -v ^# | awk '{ for (i=2; i<=NF; i++) {print $i" "$1}}' | sort`;

function getMimeTypes() {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) return resolve('');
      if (stderr) return resolve('');
      resolve(stdout);
    });
  });
}

module.exports = getMimeTypes;
