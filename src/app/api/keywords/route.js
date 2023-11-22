/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
the file is the endpoint /keywords.json in the API of the application that receives the request to
return the suggested keywords in the json file.
*/

import { NextResponse } from "next/server"
import { readKeywords } from "@/data/keywords/CRUD"

/*

  GET method: Reads and retrieves the content of a file named 'keywords.json' and returns it as a JSON response.

*/

export const GET = async () => {
  try {
      const keywords = await readKeywords()
      return NextResponse.json(keywords)

  } catch (error) {

      return NextResponse.json("Error Al leer el Archivo", { status: 500 })
  }
}

export const POST = async (request) => {
  
}

