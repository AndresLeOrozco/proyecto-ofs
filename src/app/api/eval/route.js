/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
the file is the endpoint /eval in the API of the application that receives the request to
evaluate the Transpile Area (TA).
*/

import { EvaluateFile } from "@/data/eval/CRUD"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
      const { text } = await request.json()
      const fileContent = await EvaluateFile(text)
      return NextResponse.json(fileContent)

    } catch (error) {
      console.error(error)
      return NextResponse.json("Error, Archivo no existe")
    }
  }