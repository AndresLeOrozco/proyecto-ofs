/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
TextArea Component that contains a text area and its label.
*/


/*
    the TextArea have four properties: 
    Area = string inside the label that gives a name to the textarea.
    GetText = Function that recover all the text inside the textarea each time the area is modified.
    AreaText = string that set the value of the textarea.   
    NotEditable  string which is added to the classname of the textarea, it is used mainly to set 
    the text area as read only
*/
import React, { useState } from "react"

export const TextArea = ({ Area = '', GetText = () => { }, AreaText = '', NotEditable = '' }) => {
    
    const [row, setRows] = useState(AreaText.split("\n").length)

    const handleTextareaChange = (event) => {
        GetText(event.target.value)
    };

    const handleLine = (event) => {
        event.keyCode === 13 || event.keyCode === 8 ? setRows(AreaText.split("\n").length) : null
    };

    const AreaTextClass = `${NotEditable}  auto scrollbar-hide block p-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white ml-10`;

    // Divide el texto en líneas para contar el número de filas

    return (
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            <div className="flex">
                <div className="h-72 relative flex-1 overflow-x-auto overflow-y-auto dark:bg-gray-700 " >
                    <textarea
                        spellCheck="false"
                        value={AreaText}
                        onChange={handleTextareaChange}
                        rows={row > 14 ? row : 14} 
                        className={AreaTextClass}
                        onKeyDown={handleLine}
                    ></textarea>
                    <div className=" absolute inset-y-0 left-0 pl-2 top-2 text-gray-400">
                        {AreaText.split("\n").map((_, index) => (
                            <div key={index} className="mb-1 mt-1 text-xs">
                                {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
