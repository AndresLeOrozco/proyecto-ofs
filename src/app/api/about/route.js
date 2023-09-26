import { NextResponse } from "next/server"
import {Read} from "@/data/about/Crud"

export function GET() {

  try {

    const developers =  Read()
    return NextResponse.json(developers)

  } catch (error) {
    return NextResponse.json("Error Al leer el Archivo", { status: 500 })
  }
}
