import { spawn } from 'child_process';
import * as fs from 'fs-extra';

new Promise<number>((res, rej) => {
  let prc = spawn('npx', ['webpack-cli', '--mode', 'production'], { stdio: 'inherit' });
  prc.stdout.setEncoding('utf8');
  prc.on('close', (code) => {
    (code == 0 ? res : rej)(code);
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
