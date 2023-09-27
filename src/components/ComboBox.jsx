/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
ComboBox Component
*/


export const ComboBox = ({ items = [], selectedFile, updateInputText, setComboBoxValue }) => {
    
    const handleChangeOp = ({target: {value}}) => {
        
        updateInputText(value)
        selectedFile(value)
        setComboBoxValue(value)
        console.log(value)
    } 

    return (
        <div className="mb-2 px-10" id="scriptCB">
        <select onChange={handleChangeOp} class="border border-gray-300 bg-white text-gray-700 py-2 px-4 rounded-lg shadow-md appearance-none m-4">
            <option value="">--Selecciona tu archivo--</option>
            {items.map((item) => (
                <option key={item} value={`${item}`}>{item}</option>
            ))}
        </select>
    </div>
    
    )
}
