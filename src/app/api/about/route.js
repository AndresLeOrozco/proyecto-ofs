import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    Desarrolladores: [
      { nombre: "Andres Leon Orozco", cualidad: "Cierre" },
      { nombre: "Eduardo Ojeda Paladino", cualidad: "Banca" },
      { nombre: "Rony Chinchilla Azofeifa", cualidad: "SOBONAZO" },
      { nombre: "Kairo Chacon Maleanos", cualidad: "Faraon" },
    ],
  });
}
