/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
the file is the endpoint /about in the API of the application that receives the request to
return general information about the project and developers.
*/

import { NextResponse } from "next/server"
import { readAbout } from "@/data/about/CRUD"

/*
  GET method: Reads and retrieves the content of all files and returns them as a JSON response.

*/

export const GET = async () => {
  try {
      const about = await readAbout()
      return NextResponse.json(about)

  } catch (error) {

      return NextResponse.json("Error Al leer el Archivo", { status: 500 })
  }
}

export const POST = async (request) => {
  
}

