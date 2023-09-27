/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
the file is the endpoint /script in the API of the application that receives the request to
load all existing files in the comboBox component.
*/

import { ReadAllFiles } from "@/data/script/Crud"
import { NextResponse } from "next/server"

/*

  GET method: Reads and retrieves the content of all files and returns them as a JSON response.
  
*/

export const GET = async () => {
    try {
        return NextResponse.json(await ReadAllFiles())
    } catch (error) {
        return NextResponse.json("Error Al leer el Archivo")
    }
}

