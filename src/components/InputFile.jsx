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
import { Post } from "@/app/RequestFunctions/Post";

export const InputFile = ({selectedFile, updateInputText, onOff, actualFile}) => {
    const inputRef = useRef(null);

    const handleTypeChange = ({target: {value}}) => {
        updateInputText(value)
    }

    const handleChangeName = (event) =>{
        
    }

    useEffect(() => {
        const input = inputRef.current
        input.value = selectedFile
        
    },[selectedFile])

    return(
        <div className="px-10 m-3"  id="d-InputFile">
            <input id="inputFile" disabled={onOff} onChange={handleTypeChange} onKeyPress={handleChangeName}  ref={inputRef} type="text"  placeholder="Unsaved File"/>
        </div>
    )
}