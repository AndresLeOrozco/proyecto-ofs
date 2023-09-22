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

import fs from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
      const { text } = await request.json() 
      const filePath = path.join(process.cwd(), "private", text)
      console.log(filePath)
      return NextResponse.json(await fs.readFile(filePath, "utf-8"))
    } catch (error) {
      console.error(error)
      return NextResponse.json({ message: "Error guardado incorrectamente" })
    }
  }