/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
this file recover a fs file and returns its content
*/

import fs from "fs/promises"
import path from "path"
import { exec } from "node:child_process";

export const EvaluateFile = async (name) => {

    const filePath = path.join(process.cwd(), "jsFiles", name)
    try {
        console.log(filePath)
        const child = execFile(`node "./jsFile/ofs_test.js"`,  (error, stdout, stderr) => {
            if (error) {
              throw error;
            }
            console.log(stdout);
          }); 
        //const fileContent = await fs.readFile(filePath, {encoding: "utf-8"})
        console.log(child)
        return fileContent;
    } catch (err) {
        throw new Error("Error reading file: ", name);
    }
}