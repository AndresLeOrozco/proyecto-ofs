/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
the file is the endpoint /script/[id] in the API of the application that receives the request to
save and load files in the Edition Textual Area (EA).
*/

import fs from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"

export const POST = async (request, {params}) => {
  try {
    const fileContent = await request.json() 

    const filePath = path.join(process.cwd(), "private", params.id)

    await fs.writeFile(filePath, fileContent, "utf-8")

    return NextResponse.json( "Archivo guardado correctamente" )
  } catch (error) {

    console.error(error)
    return NextResponse.json( "Error" )
  }
}

export const GET = async (request) => {
  try {
    // Recibe el nombre del archivo como parámetro en la URL
    const { searchParams } = new URL(request.url)
    const fileName = searchParams.get("fileName")
    // Define la ruta del archivo en el servidor
    const filePath = path.join(process.cwd(), "private", fileName)

    // Lee el contenido del archivo
    const fileContent = await fs.readFile(filePath, "utf-8")

    // Devuelve el contenido como respuesta
    return NextResponse.json(fileContent)
  } catch (error) {
    return NextResponse.json("Error Al leer el Archivo")
  }
}
