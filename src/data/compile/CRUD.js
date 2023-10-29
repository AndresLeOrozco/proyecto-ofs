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
    try {
        const filePath = path.join(process.cwd(), "jsFiles", name)
        console.log(filePath)
        const response = await fetch(`http://localhost:8000/compile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ filePath: filePath })
        })
        const data = await response.json()
        return data
    } catch (err) {
        return "No File"
    }

}