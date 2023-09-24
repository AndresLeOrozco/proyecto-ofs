import { NextResponse } from "next/server"
import {Read} from "@/app/data/about/Crud"

export function GET() {
  const developers =  Read()
  return NextResponse.json(developers)
}
