import { spawn } from 'child_process';
import * as path from 'path';

let promises : [Promise<number>, Promise<number>] = [
  new Promise<number>((res, rej) => {
    let prc = spawn('npx', ['nodemon', '--exec', 'ts-node', '-w', path.join(__dirname, 'api'), path.join(__dirname, 'api/server.ts')], { stdio: 'inherit' });
    prc.on('close', (code) => {
      (code == 0 ? res : rej)(code);
    });
  }),
  new Promise<number>((res, rej) => {
    let prc = spawn('npx', ['webpack', '--watch', '--progress', '--info-verbosity', 'verbose', '--mode', 'development'], { stdio: 'inherit' });
    prc.on('close', (code) => {
      (code == 0 ? res : rej)(code);
    });
  })
];

Promise.all(promises);
