/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
ComboBox Component
*/

import { useEffect, useRef } from "react";

export const InputFile = ({file}) => {
    const inputRef = useRef(null);

    /*
        This useEffect is used to disable typing in the input.
    */
    useEffect(() => {
        const input = inputRef.current
        input.value = file
        file? input.disabled = true : input.disabled = false
    },[file])
    return(
        <div id="d-InputFile">
            <input id="inputFile" ref={inputRef} type="text"  placeholder="File Name"/>
        </div>
    )
}