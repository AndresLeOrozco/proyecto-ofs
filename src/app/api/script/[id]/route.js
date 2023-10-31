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
import { ReadFileByName, editFileNameByName } from "@/data/script/Crud"
import { Console } from "console"
import { stat } from "fs"

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
   
    const response  = await editFileNameByName(params.id, newName);

    return NextResponse.json("Rename Success")
  } catch (error) {
    return NextResponse.json("Error", { status: 500 })
  }
}
