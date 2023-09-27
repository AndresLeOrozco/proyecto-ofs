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
import path from 'path';
import { promises as fs } from 'fs';

/*

  GET method: Reads and retrieves the content of a file named 'keywords.json' and returns it as a JSON response.

*/

 export const GET = async () => {
  
  const filePath = path.join(process.cwd(), 'src', 'data')

  try {
    const fileContents = await fs.readFile(filePath + '/keywords.json', 'utf-8')
    return NextResponse.json(fileContents)
    
  } catch (error) {

    return NextResponse.json('Error Al leer el Archivo', { status: 500 })
  }

}

