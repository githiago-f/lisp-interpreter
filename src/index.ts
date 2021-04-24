import { readFile } from 'fs';
import { compileToExecutable } from './utils/compiler';
import path from 'path';

const execute = (myPath) => {
    readFile(path.resolve(myPath), (err, data) => {
        if(err) throw err;
        const fileInput = data.toString();
        console.log(fileInput);
        const output = compileToExecutable(fileInput);
        console.log(output);
    });
}

execute(
    process.argv
        .filter(i => i.trim().includes('--path'))
        .shift()
        .replace("--path=", '')
);
