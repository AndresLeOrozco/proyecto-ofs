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
import {exec} from "child_process"

export const EvaluateFile = async (name) => {

    const filePath = path.join(process.cwd(), "jsFiles", name)
    const {stdout} = exec('node jsFiles/ofs_test.js', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
      
        console.log(`stdout:\n${stdout}`);
        const a = stdout;
        return stdout
      });
      

    console.log("Onichan ",stdout)
    try {
        const fileContent = await fs.readFile(filePath, "utf-8")
        return stdout;
    } catch (err) {
        throw("Error reading file: ", name);
    }
}