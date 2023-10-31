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

/*
  POST method: Receives a JSON object from the request body containing data and an 'id' parameter from the request URL.
  It writes the received data to a file specified by the 'id' parameter and returns a JSON response with a message.
  
*/

export const POST = async (request, { params }) => {
  try {

    const fileContent = await request.json()
    
    const message = await WriteFileByName(params.id, fileContent)

    return NextResponse.json(message)
  } catch (error) {

    return NextResponse.json("Error")
  }
}