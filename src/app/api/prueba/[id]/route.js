
import fs from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"
import { ReadAllFiles } from "@/data/script/Crud"

/*

  GET method: Reads the content of a file specified by the 'id' parameter from the request URL and returns it as a JSON response.

*/

export const GET = async (_, { params }) => {
  try {

    const fileContent = await ReadAllFiles()
    
    return NextResponse.json(fileContent)

  } catch (error) {

    return NextResponse.json("Error Al leer el Archivo", { status: 500 })
  }
}