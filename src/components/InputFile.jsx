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

export const InputFile = ({selectedFile, updateInputText, onOff}) => {
    const inputRef = useRef(null);

    const handleTypeChange = ({target: {value}}) => {
        updateInputText(value)
    }

    /*
        This useEffect is used to disable typing in the input.
    */
    useEffect(() => {
        const input = inputRef.current
        input.value = selectedFile
        
    },[selectedFile])
    return(
        <div id="d-InputFile">
            <input id="inputFile" disabled={onOff} onChange={handleTypeChange}  ref={inputRef} type="text"  placeholder="Unkown File"/>
        </div>
    )
}