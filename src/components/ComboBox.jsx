/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
ComboBox Component
*/

import { useEffect } from "react"


export const ComboBox = ({ items = [], selectedFile, updateInputText, setComboBoxValue }) => {
    
    const handleChangeOp = ({target: {value}}) => {
        
        updateInputText(value)
        selectedFile(value)
        setComboBoxValue(value)
        
    } 


    return (
        <div className="inline-block mb-2 px-10" id="scriptCB">
        <select id="selectBox"  onChange={handleChangeOp} className="border border-gray-300 bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md appearance-none m-4">
            <option value="">--Saved Files--</option>
            {items.map((item) => (
                <option key={item} value={`${item}`}>{item}</option>
            ))}
        </select>
    </div>
    
    )
}
