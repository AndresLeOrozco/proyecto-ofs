/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
ComboBox Component
*/


export const ComboBox = ({ items = [], selectedFile, updateInputText }) => {
    
    const handleChangeOp = ({target: {value}}) => {
        const selectedScript = value
        selectedFile(selectedScript)
        updateInputText(value)
    } 

    return (
        <div id="scriptCB">
            <select  onChange={handleChangeOp} id="scripts-select" name="scripts">
            <option value="">--Please choose a saved script--</option>
            {items.map((item) => (
                <option key={item} value = {`${item}`} >{item}</option>
             ))}
            </select>      
        </div>
    )
}
