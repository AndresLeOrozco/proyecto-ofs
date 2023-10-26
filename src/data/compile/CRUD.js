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

export const compileFile = async (name) => {

    const filePath = path.join(process.cwd(), "jsFiles", name)
    console.log(filePath)
    try {
        return await fs.readFile(filePath, "utf-8")
    } catch (err) {
        return "No File"
    }
    
}