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

import { Post } from "@/app/RequestFunctions/Post"
/*
    the request buttom have four properties: 
    children = places the children of the request buttom as the child of the inside buttom.
    afterProcess = function that executes with the response of the request.
    url = the url after http://localhost:3000/api/ to reach the require endpoint.
    processData = Data that will be sent in the request body.

*/



export const Button = ({ children, clickEvent, title }) => {
    return (
        <buttom
            className="btn-clear"
            onClick={clickEvent}
            title={title}
        >
            {children}
        </buttom>
    )
}


/*
    Save Buttom
*/
export const SaveButton = ({ children, url, processData, FileSaved, placeholder }) => {

    const handleSaveFile = async () => {
        try {
            // Validar si fileContent no están vacíos antes de guardar

            if (!processData.text || FileSaved === "") {
                alert("Area de texto o nombre de archivo vacio.")
                return
            }

            let fileContent = processData.text
            url = url + `/${FileSaved}`
            let response = await Post(fileContent, url)
            if (response !== 'Error') {
                alert(response)
            }
        } catch (error) {
            console.error("Error de red:", error)
        }
    }
    return (
        <button
            className="btn-save"
            type="button"
            onClick={handleSaveFile}
            title={placeholder}
        >
            {children}
        </button>
    )
}



export const RetrieveButton = ({ children, afterProcess, FileSaved, placeholder }) => {
    const handleFileInputChange = async () => {
        
        try {
            const response = await fetch(
                `http://localhost:3000/api/script/${FileSaved}`
            )
            if (response.ok) {
                afterProcess(await response.json())
            } else {
                alert("File doesn't exist at server files")
            }
        } catch (error) {
            console.error("Network error:", error)
        }
    }

    return (
        <div>
            <button
                className="btn-upload"
                type="button"
                title={placeholder}
                onClick={handleFileInputChange}
            >
                {children}
            </button>
        </div>
    )
}
