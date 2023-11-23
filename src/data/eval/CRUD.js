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
import { stderr } from "process";

const execPromise = promisify(exec);

export const EvaluateFile = async () => {
    try {
        const filePath = path.join(process.cwd(), "private", "prueba.mjs")
        console.log(filePath)
        const {stdout, stderr, error} = await execPromise(`node "${filePath}"`)
        console.error(stderr);
        console.error(stdout);
        return stdout;
    } catch (err) {
        return err.stderr;
    }
}