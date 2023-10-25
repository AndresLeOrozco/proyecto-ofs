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

export const compileFile = async () => {

    const filePath = path.join(process.cwd(), "jsFiles/ofs_test.js")
    try {
        return await fs.readFile(filePath, "utf-8")
    } catch (err) {
        return "No File"
    }
    
}