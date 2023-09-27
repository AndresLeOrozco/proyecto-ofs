import { NextResponse } from "next/server"
import path from 'path';
import { promises as fs } from 'fs';


 export const GET = async () => {
  
  const filePath = path.join(process.cwd(), 'src', 'data')

  try {
    const fileContents = await fs.readFile(filePath + '/keywords.json', 'utf-8')
    return NextResponse.json(fileContents)
    
  } catch (error) {

    return NextResponse.json('Error Al leer el Archivo', { status: 500 })
  }

}

