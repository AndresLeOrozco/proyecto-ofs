import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json(`
    Desarrolladores:
    Andres Leon Orozco / Lider
    Eduardo Ojeda Paladino
    Rony Chinchilla Azofeifa
    Kairo Chacon Maleanos
     `)
}