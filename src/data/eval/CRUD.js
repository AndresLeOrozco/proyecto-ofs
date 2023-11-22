/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
this file recover a fs file and returns its content
*/

import path from "path"
import { promisify } from 'util';
import { exec } from 'child_process';

const execPromise = promisify(exec);

export const EvaluateFile = async () => {
    try {
        const filePath = path.join(process.cwd(), "private", "transpiledCode.mjs")
        const {stdout, stderr, error} = await execPromise(`node "${filePath}"`)
        console.error(stderr);
        console.error(stdout);
        return stdout;
    } catch (err) {
        throw("Error reading file: ", name);
    }
}