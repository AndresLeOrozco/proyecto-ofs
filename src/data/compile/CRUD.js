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
import fs from "fs/promises";
export const compileFile = async (text) => {
    try {
        const response = await fetch(`http://localhost:8000/compile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({filePath: text})
        })  
        const filePath = path.join(process.cwd(), "private", "prueba.mjs");
        const fileContent = await fs.readFile(filePath, "utf-8");
        return fileContent
    } catch (err) {
        console.error(err)
        return "No File"
    }

}