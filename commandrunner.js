import { exec } from 'child_process';
import fs from 'fs';

const path = `./src/specs/${process.argv[2]}/`;
const testfiles = fs.readdirSync(path);
const specs = testfiles.map((file) => path + file);

function runTest(spec) {
  exec(`npx jest --testPathPattern='${spec}'`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Error output: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
}

async function run() {
  for (let i = 0; i < specs.length; i++) {
    await new Promise((res, rej) => {
      setTimeout(() => {
        runTest(specs[i])
        res();
      }, 20000);
    })
  }
}

run();
