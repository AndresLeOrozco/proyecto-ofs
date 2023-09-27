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


export const GET = async (_, { params }) => {
  try {

    const fileContent = await ReadFileByName(params.id)
    
    return NextResponse.json(fileContent)

  } catch (error) {

    return NextResponse.json("Error Al leer el Archivo", { status: 500 })
  }
}

export const PUT = async (request, { params }) => {
  try {

    const fileOldNamePath = path.join(process.cwd(), "private", params.id)
    const fileNewNamePath = path.join(process.cwd(), "private", request.body.newName)

    let fileResponse = ""
    fs.rename(fileOldNamePath, fileNewNamePath, (err) => {
      err ?
        fileResponse = params.id
        :
        fileResponse = request.body.newName
    });
    return NextResponse.json(fileResponse)
  } catch (error) {
    return NextResponse.json("Error Al leer el Archivo")
  }
}
