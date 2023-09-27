/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
the file is the endpoint /save/[id] in the API of the application that receives the request to
save files in the Edition Textual Area (EA).
*/

import { NextResponse } from "next/server"
import { WriteFileByName } from "@/data/script/Crud"

export const POST = async (request, { params }) => {
  try {

    const fileContent = await request.json()
    
    const message = await WriteFileByName(params.id, fileContent)

    return NextResponse.json(params.id + message)
  } catch (error) {

    return NextResponse.json("Error")
  }
}