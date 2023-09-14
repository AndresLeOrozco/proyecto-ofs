"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"




export const SimpleButtons = ({ name, url }) => {
    const router = useRouter();
    const [fileName, setFileName] = useState(); // Nombre del archivo
    const [fileContent, setFileContent] = useState(); // Contenido del archivo
  
    const handleSaveFile = async () => {
      try {
        // Validar si fileName y fileContent no están vacíos antes de guardar
        if (!fileName || !fileContent) {
          console.error("Por favor, ingresa un nombre y contenido del archivo.");
          return;
        }
  
        const response = await fetch(`/api/script/${fileName}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fileName, fileContent }),
        });
  
        if (response.ok) {
          console.log('Archivo guardado en el servidor correctamente');
        } else {
          console.error('Error al guardar el archivo en el servidor');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };
  
    return (
      <div>
        {/* Inputs para el nombre y contenido del archivo */}
        <input
          type="text"
          placeholder=" Id del archivo"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <textarea
          placeholder="Contenido del archivo"
          value={fileContent}
          onChange={(e) => setFileContent(e.target.value)}
        />
  
        {/* Botón para guardar el archivo en el servidor */}
        <button className="bg-blue-500 hover:cursor-pointer hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={handleSaveFile}>Save</button>
  
        {/* Botón para redirigir a la URL especificada */}
    
      </div>
    );
  };


export const ModalButtons =  ({data, name, url}) => {
    const users = data.Desarrolladores
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                className="bg-auto-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                {name}
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Desarrolladores
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    {users.map((user, index) => (
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                            Name: {user.nombre}  -  Cualidad Registrada: {user.cualidad}
                                        </p>
                                    ))}


                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(false)
                                        }}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

