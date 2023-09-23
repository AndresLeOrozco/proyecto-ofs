/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Buttom Components 
RequestButtom: that creates a butttom and produce a request by click event.
Modal Buttom: Create and show a dynamic content modal.
*/

"use client"
import { useState, useRef } from "react"
import Image from "next/image"
import upload from '../../public/images/upload.png'
import save from '../../public/images/save.png'

/*
    the request buttom have four properties: 
    children = places the children of the request buttom as the child of the inside buttom.
    afterProcess = function that executes with the response of the request.
    url = the url after http://localhost:3000/api/ to reach the require endpoint.
    processData = Data that will be sent in the request body.

*/

export const ActionButtom = ({ children, OnClick, placeholder }) => {
    return (

        <buttom
            className="btn-compile"
            onClick={OnClick}
            title = {placeholder}
        >
            {children}
        </buttom>

    )
}

/*
    Save Buttom
*/
export const SaveButton = ({ children, url, processData, setFileSaved, placeholder }) => {
    const [fileName, setFileName] = useState("")
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setFileSaved.fileName !== 'Unsaved Text' ? handleSaveExistedFile() : setShowModal(true)
    }

    const handleSaveExistedFile = () => {
        url = url + `/${setFileSaved.fileName}`
        let fileContent = processData.text
        let fileName = setFileSaved.fileName
        let body = { fileName, fileContent }
        Post(body, url, (newText) => null)
        alert("Archivo guardado correctamente")
    }

    const handleSaveFile = async () => {
        try {
            // Validar si fileContent no están vacíos antes de guardar

            if (!processData.text || fileName === "") {
                alert("Area de texto o nombre de archivo vacio.")
                return
            }

            let fileContent = processData.text
            setFileSaved.setFile(fileName)
            url = url + `/${fileName}`
            let body = { fileName, fileContent }
            Post(body, url, (newText) => null)
            setShowModal(false)
            alert("Archivo guardado correctamente")
        } catch (error) {
            console.error("Error de red:", error)
        }
    }
    return (
        <>
            <button
                className="btn-save"
                type="button"
                onClick={handleShowModal}
                title={placeholder}
            >
                <Image className="img-play" src={save}></Image>
                {children}
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
                                        Save File
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

                                    <input
                                        type="text"
                                        placeholder=" File Id"
                                        value={fileName}
                                        onChange={(e) => setFileName(e.target.value)}
                                    />

                                    {/* Botón para guardar el archivo en el servidor */}
                                    <button className="bg-blue-500 hover:cursor-pointer hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                                        onClick={() => handleSaveFile()}>Save</button>


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



export const RetrieveButton = ({ children, afterProcess, setFileSaved, placeholder }) => {
    const fileInputRef = useRef(null)

    const handleFileInputChange = async () => {
        const selectedFile = fileInputRef.current.files[0]
        if (selectedFile) {
            const fileName = selectedFile.name
            try {
                const response = await fetch(
                    `http://localhost:3000/api/script/${fileName}?fileName=${fileName}`
                )
                if (response.ok) {
                    setFileSaved(fileName)
                    afterProcess(await response.json())
                } else {
                    alert("El archivo a recuperar debe ser de la carpeta private")
                }
            } catch (error) {
                console.error("Error de red:", error)
            }
        }
    }

    return (
        <div>
            <input
                type="file"
                //accept=".txt"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileInputChange}
            />
            <button
                className="btn-upload"
                type="button"
                title={placeholder}
                onClick={() => fileInputRef.current.click()}
            >
                <Image className="img-play" src={upload}></Image>
                {children}
            </button>
        </div>
    )
}

/*
    Eval Buttom
*/


/*
    Post request function, it is reusable because of the dynamic url, dynamic function that manage the response data
    and also dynamic body request
*/