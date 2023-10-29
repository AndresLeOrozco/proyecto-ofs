/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
the file is the endpoint /compile in the API of the application that receives the request to
compile the Edition Textual Area (EA).
*/

import { NextResponse } from "next/server"
import { compileFile } from "@/data/compile/CRUD"
import path from "path"

/*

POST method : receives an object in JSON format from the body request with only one atribute that is a string, it takes this object and add another
attribute that is also a string with the current date and returns an object with the string of 
the request and with other string containing the current date.

*/

export async function POST(request) {
  try {
    const { name } = await request.json()
    const nameMJS = name.replace('.ofs', '.mjs');
    const data = await compileFile(nameMJS)
    return NextResponse.json(data)
  }
  catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'An error occurred' });
  }
}