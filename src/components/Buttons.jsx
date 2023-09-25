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
import { Alert } from "./Alert"
import { useState } from "react"
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
    const  [messageAlert, setmessageAlert] = useState("")
    const  [isOpen, setIsOpen] = useState(false)
    const  [typeAlert, setTypeAlert] = useState("white")

    const handleSaveFile = async () => {
        try {
            if (!processData.text || !FileSaved) {
                setmessageAlert("Area text or File name field empty")
                setTypeAlert("red")
                setIsOpen(true)
                return
            }

            let fileContent = processData.text
            url = url + `/${FileSaved}`
            let response = await Post(fileContent, url)
            if (response !== 'Error') {
                setmessageAlert(response)
                setTypeAlert("green")
                setIsOpen(true)
            }
        } catch (error) {
            console.error("Error de red:", error)
        }
    }
    return (
        <>
            <button
                className="btn-save"
                type="button"
                onClick={handleSaveFile}
                title={placeholder}
            >

                {children}
            </button>
            <Alert text={messageAlert} open={isOpen} setOpen={setIsOpen} type={typeAlert}  />
        </>
    )
}



export const RetrieveButton = ({ children, afterProcess, FileSaved, placeholder }) => {
    const  [messageAlert, setmessageAlert] = useState("")
    const  [isOpen, setIsOpen] = useState(false)
    const  [typeAlert, setTypeAlert] = useState("white")

    const handleFileInputChange = async () => {

        try {
            if (!FileSaved) {
                setmessageAlert("Area text or File name field empty")
                setTypeAlert("red")
                setIsOpen(true)
                return
            }
            const response = await fetch(
                `http://localhost:3000/api/script/${FileSaved}`
            )
            if (response.ok) {
                afterProcess(await response.json())
            } else {
                setmessageAlert("File doesn't exist")
                setTypeAlert("red")
                setIsOpen(true)
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
            <Alert text={messageAlert} open={isOpen} setOpen={setIsOpen} type={typeAlert}  />
        </div>
    )
}
