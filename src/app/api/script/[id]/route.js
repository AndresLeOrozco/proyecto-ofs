import fs from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"

export const POST = async (request) => {
  try {
    const { fileName, fileContent } = await request.json() // Recibe datos del cliente
    // Define la ruta del archivo en el servidor
    const filePath = path.join(process.cwd(), "private", fileName)

    // Escribe el contenido en el archivo
    await fs.writeFile(filePath, fileContent, "utf-8")

    return NextResponse.json({ message: "Archivo guardado correctamente" })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error guardado incorrectamente" })
  }
};

export const GET = async (request) => {
  try {
    // Recibe el nombre del archivo como parámetro en la URL
    const { searchParams } = new URL(request.url)
    const fileName = searchParams.get("fileName")
    // Define la ruta del archivo en el servidor
    const filePath = path.join(process.cwd(), "private", fileName)

    // Lee el contenido del archivo
    const fileContent = await fs.readFile(filePath, "utf-8")

    // Devuelve el contenido como respuesta
    return NextResponse.json(fileContent)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Error al leer el archivo" },
      { status: 500 }
    )
  }
}
