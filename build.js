const spawn = require('child_process').spawn;
const fs = require('fs-extra');

new Promise((res, rej) => {
  let prc = spawn('npx', ['webpack', '--mode', 'production']);
  prc.stdout.setEncoding('utf8');
  prc.on('close', (code) => {
    (code == 0 ? res : rej)(code);
  });
  prc.stdout.on('data', function (data) {
    let str = data.toString()
    let lines = str.split(/(\r?\n)/g);
    process.stdout.write(lines.join(''));
  });
}).then(() => {
  if (fs.existsSync('./build')) {
    fs.removeSync('./build');
  }
  fs.mkdirSync('./build');
  fs.mkdirSync('./build/dist');
  fs.mkdirSync('./build/frontend');
  fs.copySync('./package.json', './build/package.json');
  fs.copySync('./api', './build/api');
  fs.copySync('./frontend/index.html', './build/frontend/index.html');
  fs.copySync('./dist/bundle.js', './build/dist/bundle.js');
})
