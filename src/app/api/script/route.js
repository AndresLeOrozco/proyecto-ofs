import { ReadAllFiles } from "@/data/script/Crud"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        return NextResponse.json(await ReadAllFiles())
    } catch (error) {
        return NextResponse.json("Error Al leer el Archivo")
    }
}

