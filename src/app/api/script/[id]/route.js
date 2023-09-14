
import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(req) {
  

  try {
    const { fileName, fileContent } = await req.json(); // Recibe datos del cliente
console.log(fileName,fileContent)
    // Define la ruta del archivo en el servidor
    const filePath = path.join(process.cwd(), 'public', fileName);

    // Escribe el contenido en el archivo
    await fs.writeFile(filePath, fileContent, 'utf-8');
    
     return NextResponse.json({ message: 'Archivo guardado correctamente' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error guardado correctamente' });
  }
}
