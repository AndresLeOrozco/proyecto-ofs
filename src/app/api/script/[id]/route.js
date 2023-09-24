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

export const POST = async (request, { params }) => {
  try {
    let message = ""

    const fileContent = await request.json()

    const filePath = path.join(process.cwd(), "private", params.id)

    fs.access(filePath, fs.constants.F_OK)
      .then(() => {
        message = " Existed File, Successfully overwrited"
      })
      .catch((err) => {
        message = " Successfully Saved"
      })

    await fs.writeFile(filePath, fileContent, "utf-8")

    return NextResponse.json(params.id + message)
  } catch (error) {

    console.error(error)
    return NextResponse.json("Error")
  }
}

export const GET = async (_, { params }) => {
  try {

    const filePath = path.join(process.cwd(), "private", params.id)

    // Lee el contenido del archivo
    const fileContent = await fs.readFile(filePath, "utf-8")

    // Devuelve el contenido como respuesta
    return NextResponse.json(fileContent)
  } catch (error) {
    return NextResponse.json("Error Al leer el Archivo")
  }
}

export const PUT = async (_, { params }) => {
  try {

    const filePath = path.join(process.cwd(), "private", params.id)

    // Lee el contenido del archivo
    const fileContent = await fs.readFile(filePath, "utf-8")

    // Devuelve el contenido como respuesta
    return NextResponse.json(fileContent)
  } catch (error) {
    return NextResponse.json("Error Al leer el Archivo")
  }
}
