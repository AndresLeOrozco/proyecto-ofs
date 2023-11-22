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

export const compileFile = async (text) => {
    try {
        const response = await fetch(`http://localhost:8000/compile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({filePath: text})
        })  
        const data = await response.json()
        return data
    } catch (err) {
        console.error(err)
        return "No File"
    }

}