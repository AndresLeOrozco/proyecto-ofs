import { NextResponse } from "next/server"
import path from 'path';
import { promises as fs } from 'fs';



 export const GET = async () => {
  
  const filePath = path.join(process.cwd(), 'data')

  try {
    const fileContents = await fs.readFile(filePath + '/about.json', 'utf-8')
    return NextResponse(fileContents)
    
  } catch (error) {

    return NextResponse.json(error, { status: 500 })
  }

}
