/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
the file is the endpoint /script/[id] in the API of the application that receives the request to
load files in the Edition Textual Area (EA).
*/

import fs from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"
import { ReadFileByName, WriteFileByName } from "@/data/script/Crud"

/*

  GET method: Reads the content of a file specified by the 'id' parameter from the request URL and returns it as a JSON response.

*/

export const GET = async (_, { params }) => {
  try {

    const fileContent = await ReadFileByName(params.id)
    
    return NextResponse.json(fileContent)

  } catch (error) {

    return NextResponse.json("Error Al leer el Archivo", { status: 500 })
  }
}

/*

  PUT method: Renames a file with the specified 'id' to a new name provided in the request body.

*/

export const PUT = async (request, { params }) => {
  try {
    
    const newName = await request.json()
   
    const fileOldNamePath = path.join(process.cwd(), "private", params.id)
    const fileNewNamePath = path.join(process.cwd(), "private", newName)
    

    await fs.rename(fileOldNamePath, fileNewNamePath);
    return NextResponse.json(newName)
  } catch (error) {
    return NextResponse.json(params.id)
  }
}
