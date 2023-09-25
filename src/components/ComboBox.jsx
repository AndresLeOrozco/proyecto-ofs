/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
ComboBox Component
*/


export const ComboBox = ({ items, selectedFile }) => {
    
    const handleChangeOp = (event) => {
        const selectedScript = event.target.value
        selectedFile(selectedScript)
    } 


    return (
        <div id="scriptCB">
            <label htmlFor="scripts-select">Script:</label>
            <select onChange={handleChangeOp} id="scripts-select" name="scripts">
            <option value="">--Please choose a script--</option>
            {items.map((item) => (
                 <option value = {`${item}`} >{item}</option>
             ))}
            </select>
        </div>
    )
}
