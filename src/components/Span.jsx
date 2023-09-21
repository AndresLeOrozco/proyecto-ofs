/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Span Component 
FileSpan: Este componente acepta un prop initialfile.fileName que establece el nombre inicial del archivo. 
Cuando haces clic en el span, se activa el modo de edición y se muestra un input que te permite modificar el nombre. 
Cuando presionas Enter, se llama a la función saveFileWithNewName con el nuevo nombre y se sale del modo de edición.
*/
"use client";
import React, { useState } from "react";

const Post = async (bodyReq, url, callback) => {
  const res = await fetch(`http://localhost:3000/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyReq),
  });
  callback(await res.json());
};

export const FileSpan = ({ processData, file }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSpanClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    file.setFileSaved(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleSaveFile = async () => {
    try {
      // Validar si fileContent no están vacíos antes de guardar

      if (!processData.text || file.fileName === "") {
        alert("Area de texto o nombre de archivo vacio.");
        return;
      }

      let fileContent = processData.text;
      let filename = file.fileName;
      file.setFileSaved(filename);
      url = `script/${filename}`;
      let body = { filename, fileContent };
      Post(body, url, (newText) => null);
      alert("Archivo guardado correctamente");
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      // Aquí se llama la función 'handleSaveFile' para guardar el archivo con el nuevo nombre
      handleSaveFile();
      setIsEditing(false);
    }
  };

  return (
    <div>
      <span
        className={`text-m font-semibold inline-block my-3 mx-3 py-2 px-2 rounded-full text-sky-600 bg-sky-200 ${
          isEditing ? "hidden" : "inline"
        } last:mr-0 mr-1`}
        onClick={handleSpanClick}
      >
        {file.fileName}
      </span>
      {isEditing && (
        <input
          type="text"
          className="text-m font-semibold inline-block my-3 mx-3 py-2 px-2 rounded-full text-sky-600 bg-sky-200 last:mr-0 mr-1"
          value={file.fileName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          autoFocus
        />
      )}
    </div>
  );
};
