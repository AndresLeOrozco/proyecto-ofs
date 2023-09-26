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

