import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.json({
    Desarrolladores: [
      { nombre: "Andres Leon Orozco", cualidad: "Programming Skills" },
      { nombre: "Eduardo Ojeda Paladino", cualidad: "Front End Skills" },
      { nombre: "Rony Chinchilla Azofeifa", cualidad: "Data Management Skills" },
      { nombre: "Kairo Chacon Maleanos", cualidad: "Design Skills" },
    ],
  })
}
