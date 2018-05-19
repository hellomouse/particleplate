const spawn = require('child_process').spawn;
const path = require('path');

Promise.all([
  new Promise((res, rej) => {
    let prc = spawn('npx', ['nodemon', '-w', path.join(__dirname, 'api'), path.join(__dirname, 'api/server.js')]);
    prc.stdout.setEncoding('utf8');
    prc.on('close', (code) => {
      (code == 0 ? res : rej)(code);
    });
    prc.stdout.on('data', function (data) {
      let str = data.toString()
      let lines = str.split(/(\r?\n)/g);
      process.stdout.write(lines.join(''));
    });
  }),
  new Promise((res, rej) => {
    let prc = spawn('npx', ['webpack', '--watch', '--progress', '--info-verbosity', 'verbose', '--mode', 'development']);
    prc.stdout.setEncoding('utf8');
    prc.on('close', (code) => {
      (code == 0 ? res : rej)(code);
    });
    prc.stdout.on('data', function (data) {
      let str = data.toString()
      let lines = str.split(/(\r?\n)/g);
      process.stdout.write(lines.join(''));
    });
  })
]);
