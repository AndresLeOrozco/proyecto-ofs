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

export const InputFile = ({file, updateInput, scrips}) => {
    const inputRef = useRef(null);

    const handleTypeChange = ({target: {value}}) => {
        updateInput(value)
    }

    /*
        This useEffect is used to disable typing in the input.
    */
    useEffect(() => {
        const input = inputRef.current
        input.value = file
        updateInput(file)
        scrips.includes(file)? input.disabled = true : input.disabled = false
    },[file])
    return(
        <div id="d-InputFile">
            <input id="inputFile" onChange={handleTypeChange}  ref={inputRef} type="text"  placeholder="File Name"/>
        </div>
    )
}