/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
the file is the endpoint /eval in the API of the application that receives the request to
evaluate the Transpile Area (TA).
*/

import { EvaluateFile } from "@/data/eval/CRUD"
import { NextResponse } from "next/server"


/*

  POST method: Receives a JSON object from the request body containing 'text'.
  It evaluates the 'text' using the EvaluateFile function and returns the result as a JSON response.
  
*/

export const POST = async (_) => {
    try {
      const fileContent = await EvaluateFile()
      return NextResponse.json(fileContent)

    } catch (error) {
      return NextResponse.json("Error, Nothing to evaluate")
    }
  }