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
import path from 'path';
import { promises as fs } from 'fs';

/*
  GET method: Reads and retrieves the content of all files and returns them as a JSON response.

*/

 export const GET = async () => {
  
  const filePath = path.join(process.cwd(), 'src', 'data')

  try {
    const fileContents = await fs.readFile(filePath + '/about.json', 'utf-8')
    return NextResponse.json(fileContents)
    
  } catch (error) {

    return NextResponse.json('Error Al leer el Archivo', { status: 500 })
  }

}
