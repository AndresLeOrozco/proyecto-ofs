/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Functional component that renders an input field.
*/

import { useEffect, useRef } from "react";
import { Put } from "@/app/RequestFunctions/Put";

/**
 * @param {string} selectedFile - The selected file name.
 * @param {function} updateInputText - A function to update the input text.
 * @param {boolean} onOff - A flag to disable or enable the input field.
 * @param {string} actualFile - The file name.
 * @returns {JSX.Element} The rendered InputFile component with an input field that reflects the selectedFile prop value and can be edited by the user.
 */

export const InputFile = ({selectedFile, updateInputText, onOff, actualFile, setOnOff, setRename}) => {
    const inputRef = useRef(null);

    const handleTypeChange = ({target: {value}}) => {
        updateInputText(value)
    }

    const changeName = async (url, body) => {
        const response = await Put(body, url)
        setOnOff()
    }

    const handleChangeName = ({key, target:{value}}) =>{
        key === 'Enter' ? changeName(`script/${actualFile}`, value ) : null
        // setRename()
    }

    useEffect(() => {
        const input = inputRef.current
        input.value = selectedFile
        
    },[selectedFile])

    return(
        <div className="inline-block px-0 m-1"  id="d-InputFile">
            <input className="bg-gray-600 text-white h-8 rounded" id="inputFile" disabled={onOff} onChange={handleTypeChange} onKeyPress={handleChangeName}  ref={inputRef} type="text"  placeholder="     Rename File"/>
        </div>
    )
}